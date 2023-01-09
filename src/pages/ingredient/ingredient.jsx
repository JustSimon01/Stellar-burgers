import React from 'react';
import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './login.module.css'

function Login() {
  return (
    <div className={styles.login}>
      <h2 className={`${styles.title} text text_type_main-medium`}>Вход</h2>
      <form className={styles.form}>
        <EmailInput />
        <EmailInput />
        <Button>Войти</Button>
      </form>
      <p className={`${styles.newUser} text text_type_main-default`}>Вы новый пользователь? <a href='#' className={`${styles.link}`}>Зарегистрироваться</a></p>
      <p className={`${styles.resetPassword} text text_type_main-default`}>Забыли пароль? <a href='#' className={`${styles.link}`}>Восстановить пароль</a></p>
    </div>

  );
}

export default Login;
