import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { Navigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUserData } from '../../services/actions/login';

function ProtectedRouteElement({ isPrivate, element }) {
  const { isAuthenticated } = useSelector((store) => store.userInfo);
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getUserData()) }, [isAuthenticated]);

  if (!isPrivate && isAuthenticated) {
    return <Navigate to={location.state ? location.state.from.pathname : "/"} replace state={{ from: location }} />;
  }

  if (isPrivate && !isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return element;

}

export default ProtectedRouteElement;
