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
import { getItemsData } from '../../services/actions/ingresients-data';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  // const userData = useSelector((store) => store.userInfo);
  // const isAuth = getCookie("accessToken");

  useEffect(() => { dispatch(getItemsData()) }, [dispatch])

  return (
    <div className={styles.App}>
      <BrowserRouter>
        <AppHeader />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<ProtectedRouteElement element={<Login />} />} />
          <Route path="/profile" element={<ProtectedRouteElement isPrivate element={<Profile />} />} />
          <Route path="/register" element={<ProtectedRouteElement element={<Register />} />} />
          <Route path="/reset-password" element={<ProtectedRouteElement element={<ResetPassword />} />} />
          <Route path="/forgot-password" element={<ProtectedRouteElement element={<ForgotPassword />} />} />
          <Route path="/ingredients/:id" element={<Ingredient />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
