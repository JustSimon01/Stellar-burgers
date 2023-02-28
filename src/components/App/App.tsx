import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import MainPage from '../../pages/main/main';
import Login from '../../pages/login/login';
import Profile from '../../pages/profile/profile';
import Register from '../../pages/register/register';
import Page404 from '../../pages/page404/page404';
import Modal from '../Modal/Modal';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import ResetPassword from '../../pages/reset-password/reset-password';
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import Ingredient from '../../pages/ingredient/ingredient';
//import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';
import { getItemsData } from '../../services/actions/ingresients-data';
import { useDispatch, useSelector } from 'react-redux';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import OrderFullScreen from '../../pages/order/order';
import Feed from '../../pages/feed/feed';
import OrderInfo from '../OrderInfo/OrderInfo';
import ProfileOrders from '../../pages/profile-orders/profile-orders';
import { WS_AUTH_CONNECTION_CLOSED, WS_AUTH_CONNECTION_START } from '../../services/actions/ws-auth-actions';
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from '../../services/actions/ws-actions';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { getUserData } from '../../services/actions/login';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state && location.state.background;
  const userData = useSelector((store: any) => store.userInfo);
  const itemsLoaded = useSelector((store: any) => store.ingredients.items);
  const wsOrdersData = useSelector((store: any) => store.wsOrders.orders);
  const wsAuthOrdersData = useSelector((store: any) => store.wsAuthOrders.orders);

  useEffect(() => {
    dispatch(getItemsData());
    dispatch(getUserData());
  }, [dispatch])

  function closePopup() {
    navigate(-1)
  };

  return (
    <div className={styles.App}>
      <AppHeader />
      {!itemsLoaded && userData
        ? <p>Загрузка</p>
        : <Routes location={background || location}>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<ProtectedRoute anonymous><Login /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute ><Profile /></ProtectedRoute>}>
            <Route path="" element={<ProfileInfo />} />
            <Route path="orders" element={<ProfileOrders reverse path={'/profile/orders'} />} />
          </Route>
          <Route path="/profile/orders/:id" element={<ProtectedRoute>
            <OrderFullScreen start={WS_AUTH_CONNECTION_START} close={WS_AUTH_CONNECTION_CLOSED} data={wsAuthOrdersData} /></ProtectedRoute>}
          />
          <Route path="/register" element={<ProtectedRoute><Register /></ProtectedRoute>} />
          <Route path="/reset-password" element={<ProtectedRoute anonymous><ResetPassword /></ProtectedRoute>} />
          <Route path="/forgot-password" element={<ProtectedRoute anonymous><ForgotPassword /></ProtectedRoute>} />
          <Route path="/ingredients/:id" element={<Ingredient />} />
          <Route path="/feed" element={<Feed path={'/feed'} />} />
          <Route path="/feed/:id" element={<OrderFullScreen start={WS_CONNECTION_START} close={WS_CONNECTION_CLOSED} data={wsOrdersData} />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      }
      {background && itemsLoaded && <Routes> <Route path="/ingredients/:id" element={<Modal handleClose={closePopup}><IngredientDetails data={itemsLoaded} /></Modal>} /> </Routes>}
      {background && wsOrdersData && <Routes> <Route path="/feed/:id" element={<Modal handleClose={closePopup}><OrderInfo modal data={wsOrdersData} /></Modal>} /> </Routes>}
      {background && wsAuthOrdersData && <Routes> <Route path="/profile/orders/:id" element={<Modal handleClose={closePopup}><OrderInfo modal data={wsAuthOrdersData} /></Modal>} /> </Routes>}
    </div>
  );
}

export default App;
