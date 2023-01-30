import React, { useState } from 'react';
import { EmailInput, Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './profile.module.css'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserData, userLogout } from '../../services/actions/login';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, name } = useSelector((store) => store.userInfo.user);
  const [current, setCurrent] = useState('profile')
  const [disabled, setDisabled] = useState(true);
  const [userInfo, setUserInfo] = useState(
    {
      email: email,
      password: "",
      name: name
    })

  const onChange = e => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }

  const onClick = (e) => {
    setCurrent(e.target.name);
  }

  const submitChanges = (e) => {
    e.preventDefault();
    dispatch(updateUserData(userInfo))
  }

  const canсelChanges = (e) => {
    setUserInfo({
      email: email,
      password: "",
      name: name
    })
  }

  const logOut = (e) => {
    setCurrent(e.target.name);
    dispatch(userLogout(() => navigate('/login')));
  }

  return (
    <div className={styles.profilePage}>
      <div className={`${styles.links} mr-15`}>
        <Link name="profile" to={{ pathname: "/profile" }} className={`${styles.link} ${current === 'profile' ? styles.active : null} text text_type_main-medium`} onClick={onClick}>Профиль</Link>
        <Link name="history" to={{ pathname: "/profile/orders" }} className={`${styles.link} ${current === 'history' ? styles.active : null} text text_type_main-medium`} onClick={onClick}>История заказов</Link>
        <Link name="exit" className={`${styles.link} ${current === 'exit' ? styles.active : null} text text_type_main-medium`} onClick={logOut}>Выход</Link>
        <p className={`${styles.text} text text_type_main-default mt-8`}>В этом разделе вы можете изменить свои персональные данные.</p>
      </div>
      <form onSubmit={submitChanges} className={styles.form}>
        <Input id='form1' placeholder="Имя" value={userInfo.name} name={'name'} onChange={onChange} icon="EditIcon" disabled={disabled} onIconClick={() => setDisabled(false)} />
        <EmailInput placeholder="Логин" value={userInfo.email} name={'email'} onChange={onChange} isIcon={true} />
        <PasswordInput placeholder="Пароль" value={userInfo.password} name={'password'} onChange={onChange} icon="EditIcon" />
        <div className={styles.buttons}>
          <Button htmlType="button" type="secondary" size="medium" onClick={canсelChanges}>Отменить</Button>
          <Button htmlType="submit" type="primary" size="medium">Сохранить</Button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
