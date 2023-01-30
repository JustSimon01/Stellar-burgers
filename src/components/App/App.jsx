import React, { useEffect } from 'react';
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
import { useDispatch } from 'react-redux';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import { getUserData } from '../../services/actions/login';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state && location.state.background;
  useEffect(() => { dispatch(getItemsData()) }, [dispatch])
  useEffect(() => { dispatch(getUserData()) }, []);

  return (
    <div className={styles.App}>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<ProtectedRouteElement element={<Login />} />} />
        <Route path="/profile" element={<ProtectedRouteElement isPrivate element={<Profile />} />} />
        <Route path="/register" element={<ProtectedRouteElement element={<Register />} />} />
        <Route path="/reset-password" element={<ProtectedRouteElement element={<ResetPassword />} />} />
        <Route path="/forgot-password" element={<ProtectedRouteElement element={<ForgotPassword />} />} />
        <Route path="/ingredients/:id" element={<Ingredient />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
      {background && <Routes> <Route path="/ingredients/:id" element={<Modal handleClose={() => { navigate(-1) }}> <IngredientDetails /></Modal>} /> </Routes>}
    </div>
  );
}

export default App;
