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
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';
import { getItemsData } from '../../services/actions/ingresients-data';
import { useDispatch, useSelector } from 'react-redux';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import { getUserData } from '../../services/actions/login';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import Orders from '../Orders/Orders';
import Order from '../../pages/order/order';
import Feed from '../../pages/feed/feed';
import { allOrders, userOrders } from '../../data.js'
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START, WS_AUTH_CONNECTION_START } from '../../services/actions/ws-actions';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state && location.state.background;
  useEffect(() => { dispatch(getItemsData()) }, [dispatch])


  return (
    <div className={styles.App}>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<ProtectedRouteElement element={<Login />} />} />
        <Route path="/profile" element={<ProtectedRouteElement isPrivate element={<Profile />} />}>
          <Route path="" element={<ProfileInfo />} />
          <Route path="orders" element={<Orders reverse type={WS_AUTH_CONNECTION_START} path={'/profile/orders'} />} />
          <Route path="orders/:id" element={<Order type={WS_AUTH_CONNECTION_START} />} />
        </Route>
        {/* <Route path="/profile/orders/:id" element={<ProtectedRouteElement isPrivate element={<Order />} />} /> */}
        <Route path="/register" element={<ProtectedRouteElement element={<Register />} />} />
        <Route path="/reset-password" element={<ProtectedRouteElement element={<ResetPassword />} />} />
        <Route path="/forgot-password" element={<ProtectedRouteElement element={<ForgotPassword />} />} />
        <Route path="/ingredients/:id" element={<Ingredient />} />
        <Route path="/feed" element={<Feed path={'/feed'} />} />
        <Route path="/feed/:id" element={<Order type={WS_CONNECTION_START} />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
      {background && <Routes> <Route path="/ingredients/:id" element={<Modal handleClose={() => { navigate(-1) }}><IngredientDetails /></Modal>} /> </Routes>}
      {background && <Routes> <Route path="/feed/:id" element={<Modal handleClose={() => { navigate(-1) }}><Order modal type={WS_CONNECTION_START} /></Modal>} /></Routes>}
      {background && <Routes> <Route path="/profile/orders/:id" element={<Modal handleClose={() => { navigate(-1) }}><Order modal type={WS_AUTH_CONNECTION_START} /></Modal>} /></Routes>}
    </div>
  );
}

export default App;
