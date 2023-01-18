import React from 'react';
import { EmailInput, Button, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import styles from './login.module.css'

function Login() {
  return (
    <div className={styles.login}>
      <h2 className={`${styles.title} text text_type_main-medium`}>Вход</h2>
      <form className={styles.form}>
        <EmailInput value={""} />
        <PasswordInput placeholder="Пароль" value={""} />
        <Link to='/'> <Button>Войти</Button> </Link>
      </form>
      <p className={`${styles.newUser} text text_type_main-default`}>Вы новый пользователь? <Link to='/register' className={`${styles.link}`}>Зарегистрироваться</Link></p>
      <p className={`${styles.resetPassword} text text_type_main-default`}>Забыли пароль? <Link to='/forgot-password' className={`${styles.link}`}>Восстановить пароль</Link></p>
    </div>

  );
}

export default Login;
