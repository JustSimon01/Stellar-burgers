import React, { useState, useEffect } from 'react';
import styles from './profile.module.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../services/actions/login';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';


function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [current, setCurrent] = useState('profile')

  useEffect(() => {
    if (location.pathname === '/profile') {
      setCurrent('profile');
    }
    if (location.pathname === '/profile/orders') {
      setCurrent("orders");
    }
  }, [location]);

  const logOut = (e) => {
    setCurrent(e.target.name);
    dispatch(userLogout(() => navigate('/login')));
  }

  return (
    <div className={styles.profilePage}>
      <div className={`${styles.links} mt-30 mr-15`}>
        <Link name="profile" to={{ pathname: "/profile" }} className={`${styles.link} ${current === 'profile' ? styles.active : null} text text_type_main-medium`}>Профиль</Link>
        <Link name="orders" to={{ pathname: "/profile/orders" }} className={`${styles.link} ${current === 'orders' ? styles.active : null} text text_type_main-medium`}>История заказов</Link>
        <Link name="exit" className={`${styles.link} ${current === 'exit' ? styles.active : null} text text_type_main-medium`} onClick={logOut}>Выход</Link>
        <p className={`${styles.text} text text_type_main-default mt-8`}>В&nbsp;этом разделе вы&nbsp;можете изменить свои персональные данные.</p>
      </div>
      <Outlet className="mt-30" />
    </div>
  );
}

export default Profile;
