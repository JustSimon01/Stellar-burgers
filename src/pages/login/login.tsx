import React, { useState } from 'react';
import { EmailInput, Button, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import styles from './login.module.css';
import { useSelector, useDispatch } from '../../types/hooks';
import { loginUser } from '../../services/actions/login';
import { FC } from 'react';
import { useForm } from '../../types/hooks';

const Login: FC = () => {
  const userData = useSelector((store) => store.userInfo); //подгрузка данных из стора
  const dispatch = useDispatch();

  const {values, handleChange} = useForm(
    {
      email: "",
      password: "",
    })

  const auth = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUser(values))
  }

  return (
    <div className={styles.login}>
      <h2 className={`${styles.title} text text_type_main-medium`}>Вход</h2>
      <form onSubmit={auth} className={styles.form}>
        <EmailInput value={values.email} name={'email'} onChange={handleChange} />
        <PasswordInput placeholder="Пароль" value={values.password} name={'password'} onChange={handleChange} />
        {userData.loginRequestFailed && (
          <p className={`${styles.error} text text_type_main-default mb-2`}>
            Неверный логин или пароль
          </p>
        )}
        <Button htmlType='submit' >Войти</Button>
      </form>
      <p className={`${styles.newUser} text text_type_main-default`}>Вы новый пользователь? <Link to='/register' className={`${styles.link}`}>Зарегистрироваться</Link></p>
      <p className={`${styles.resetPassword} text text_type_main-default`}>Забыли пароль? <Link to='/forgot-password' className={`${styles.link}`}>Восстановить пароль</Link></p>
    </div>

  );
}

export default Login;
