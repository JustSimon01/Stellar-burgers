import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getCookie, setCookie } from '../../utils/cooke';
import { refreshToken, getUserData, userLogout } from '../../services/actions/login';
import { Outlet, Navigate, useLocation, Redirect } from 'react-router-dom';

function ProtectedRouteElement({ isPrivate, element }) {

  const { isAuthenticated } = useSelector((store) => store.userInfo); //подгрузка данных из стора
  const location = useLocation();
  const dispatch = useDispatch();


  //console.log(location)
  useEffect(() => {
    dispatch(getUserData());
  }, []);

  if (!isPrivate && isAuthenticated) {
    console.log("!isPrivate", location)
    return <Navigate to={location.state ? location.state.from.pathname : "/"} replace state={{ from: location }} />;
  }

  if (isPrivate && !isAuthenticated) {
    console.log("isPrivate", location)
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return element;

}

export default ProtectedRouteElement;
