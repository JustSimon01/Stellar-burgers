import React, { useState } from 'react';
import { EmailInput, Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import styles from './register.module.css';
import { postNewUser } from '../../API/api';

function Register() {

  const [userInfo, setUserInfo] = useState(
    {
      email: "",
      password: "",
      name: ""
    })

  const onChange = e => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }

  return (
    <div className={styles.login}>
      <h2 className={`${styles.title} text text_type_main-medium`}>Регистрация</h2>
      <form className={styles.form}>
        <Input placeholder="Имя" value={userInfo.name} name={'name'} onChange={onChange} />
        <EmailInput placeholder="E-mail" value={userInfo.email} name={'email'} onChange={onChange} />
        <PasswordInput placeholder="Пароль" value={userInfo.password} name={'password'} onChange={onChange} />
        <Button htmlType='button' onClick={() => postNewUser(userInfo.email, userInfo.password, userInfo.name)}>Зарегестрироваться</Button>
      </form>
      <p className={`${styles.newUser} text text_type_main-default`}>Уже зарегестрированы? <Link to='/login' className={`${styles.link}`}>Войти</Link></p>
    </div>
  );
}

export default Register;
