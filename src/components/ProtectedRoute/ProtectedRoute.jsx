import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getCookie } from '../../utils/cooke';

export default function ProtectedRoute({ children, anonymous = false }) {
  const isLoggedIn = getCookie("accessToken");
  const location = useLocation();

  const from = location.state?.from.pathname || '/';
  // Если разрешен неавторизованный доступ, а пользователь авторизован...
  if (anonymous && isLoggedIn) {
    // ...то отправляем его на предыдущую страницу
    return <Navigate to={from} />;
  }
  // Если требуется авторизация, а пользователь не авторизован...
  if (!anonymous && !isLoggedIn) {
    // ...то отправляем его на страницу логин
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  // Если все ок, то рендерим внутреннее содержимое
  return children;
}

