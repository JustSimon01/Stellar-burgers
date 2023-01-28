import React, { useState } from 'react';
import { EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './profile.module.css'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCookie, setCookie } from '../../utils/cooke';
import { getUser, logout, resetToken } from '../../API/api';
import { refreshToken, getUserData, userLogout } from '../../services/actions/login';
import { Navigate, useNavigate } from 'react-router-dom';

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [current, setCurrent] = useState('profile')
  const [disabled, setDisabled] = useState(true);
  const [userInfo, setUserInfo] = useState(
    {
      email: "",
      password: "",
      name: ""
    })

  const onChange = e => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }

  const onClick2 = (e) => {
    setCurrent(e.target.name);
    dispatch(getUserData())
  }

  const onClick3 = (e) => {
    setCurrent(e.target.name);
  }

  const logOut = (e) => {
    setCurrent(e.target.name);
    dispatch(userLogout(() => navigate('/login')));
  }

  return (
    <div className={styles.profilePage}>
      <div className={`${styles.links} mr-15`}>
        <Link name="profile" className={`${styles.link} ${current === 'profile' ? styles.active : null} text text_type_main-medium`} onClick={onClick2}>Профиль</Link>
        <Link name="history" className={`${styles.link} ${current === 'history' ? styles.active : null} text text_type_main-medium`} onClick={onClick3}>История заказов</Link>
        <Link name="exit" className={`${styles.link} ${current === 'exit' ? styles.active : null} text text_type_main-medium`} onClick={logOut}>Выход</Link>
        <p className={`${styles.text} text text_type_main-default mt-8`}>В этом разделе вы можете изменить свои персональные данные.</p>
      </div>
      <form className={styles.form}>
        <Input id='form1' placeholder="Имя" value={userInfo.name} name={'name'} onChange={onChange} icon="EditIcon" disabled={disabled} onIconClick={() => setDisabled(false)} />
        <EmailInput placeholder="Логин" value={userInfo.email} name={'email'} onChange={onChange} isIcon={true} />
        <PasswordInput placeholder="Пароль" value={userInfo.password} name={'password'} onChange={onChange} icon="EditIcon" />
      </form>

    </div>
  );
}

export default Profile;
