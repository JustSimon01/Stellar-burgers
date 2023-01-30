import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRouteElement({ isPrivate, element }) {
  const { isAuthenticated } = useSelector((store) => store.userInfo);
  const location = useLocation();

  if (!isPrivate && isAuthenticated) {
    return <Navigate to={location.state ? location.state.from.pathname : "/"} replace state={{ from: location }} />;
  }

  if (isPrivate && !isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return element;

}

export default ProtectedRouteElement;
