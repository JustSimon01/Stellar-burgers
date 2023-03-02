import React, { useState } from 'react';
import { EmailInput, Button, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import styles from './login.module.css';
import { useSelector, useDispatch } from '../../types/hooks';
import { loginUser } from '../../services/actions/login';
import { FC } from 'react';

const Login: FC = () => {
  const userData = useSelector((store) => store.userInfo); //подгрузка данных из стора
  const dispatch = useDispatch();

  const [loginInfo, setLoginInfo] = useState(
    {
      email: "",
      password: "",
    })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  }

  const auth = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUser(loginInfo))
  }

  return (
    <div className={styles.login}>
      <h2 className={`${styles.title} text text_type_main-medium`}>Вход</h2>
      <form onSubmit={auth} className={styles.form}>
        <EmailInput value={loginInfo.email} name={'email'} onChange={onChange} />
        <PasswordInput placeholder="Пароль" value={loginInfo.password} name={'password'} onChange={onChange} />
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
