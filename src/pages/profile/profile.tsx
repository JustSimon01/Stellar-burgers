import React, { useState, useEffect } from 'react';
import styles from './profile.module.css'
import { Link } from 'react-router-dom';
import { useDispatch } from '../../types/hooks';
import { userLogout } from '../../services/actions/login';
import { useNavigate, Outlet, useLocation, NavLink } from 'react-router-dom';
import { FC } from 'react';

const Profile: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    // setCurrent(e.target.name);
    dispatch(userLogout(() => navigate('/login')));
  }

  return (
    <div className={styles.profilePage}>
      <div className={`${styles.links} mt-30 mr-15`}>
        <NavLink end to="/profile" className={({isActive}) => isActive ? `${styles.link} ${styles.active} text text_type_main-medium` : `${styles.link} text text_type_main-medium`}>Профиль</NavLink>
        <NavLink to="/profile/orders" className={({isActive}) => isActive ? `${styles.link} ${styles.active} text text_type_main-medium` : `${styles.link} text text_type_main-medium`}>История заказов</NavLink>
        <NavLink to="/login" className={`${styles.link} text text_type_main-medium`} onClick={logOut}>Выход</NavLink>
        <p className={`${styles.text} text text_type_main-default mt-8`}>В&nbsp;этом разделе вы&nbsp;можете изменить свои персональные данные.</p>
      </div>
      <Outlet />
    </div>
  );
}

export default Profile;
