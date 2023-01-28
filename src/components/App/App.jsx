import React, { useEffect } from 'react';
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import MainPage from '../../pages/main/main';
import Login from '../../pages/login/login';
import Profile from '../../pages/profile/profile';
import Register from '../../pages/register/register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResetPassword from '../../pages/reset-password/reset-password';
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import Ingredient from '../../pages/ingredient/ingredient';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';
import { getUserData, refreshToken } from '../../services/actions/login';
import { getCookie } from '../../utils/cooke';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  // const userData = useSelector((store) => store.userInfo);
  // const isAuth = getCookie("accessToken");



  return (
    <div className={styles.App}>
      <BrowserRouter>
        <AppHeader />
        <Routes>
          <Route path="/" element={<ProtectedRouteElement isPrivate element={<MainPage />} />} />
          <Route path="/login" element={<ProtectedRouteElement element={<Login />} />} />
          <Route path="/profile" element={<ProtectedRouteElement isPrivate element={<Profile />} />} />
          <Route path="/register" element={<ProtectedRouteElement element={<Register />} />} />
          <Route path="/reset-password" element={<ProtectedRouteElement element={<ResetPassword />} />} />
          <Route path="/forgot-password" element={<ProtectedRouteElement element={<ForgotPassword />} />} />
          <Route path="/ingredient" element={<Ingredient />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
