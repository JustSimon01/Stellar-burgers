import React from 'react';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './reset-password.module.css'
import { Link } from 'react-router-dom';

function ResetPassword() {
  return (
    <div className={styles.login}>
      <h2 className={`${styles.title} text text_type_main-medium`}>Восстановление пароля</h2>
      <form className={styles.form}>
        <PasswordInput placeholder="Введите новый пароль" />
        <Input placeholder="Введите код из письма" />
        <Button>Сохранить</Button>
      </form>
      <p className={`${styles.newUser} text text_type_main-default`}>Вспомнили пароль? <Link to='/login' className={`${styles.link}`}>Войти</Link></p>
    </div>

  );
}

export default ResetPassword;
