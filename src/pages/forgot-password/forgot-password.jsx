import React, { useState } from 'react';
import { Input, EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './forgot-password.module.css'
import { Link } from 'react-router-dom';
import { postForgotPassword } from '../../API/api';

function ForgotPassword() {

  const [email, setEmail] = useState('')

  const onChange = e => {
    setEmail(e.target.value);
  }

  return (
    <div className={styles.login}>
      <h2 className={`${styles.title} text text_type_main-medium`}>Восстановление пароля</h2>
      <form className={styles.form}>
        <EmailInput placeholder="Укажите e-mail" onChange={onChange} value={email} />
        <Button htmlType="button" onClick={() => postForgotPassword(email)}>Восстановить</Button>
      </form>
      <p className={`${styles.newUser} text text_type_main-default`}>Вспомнили пароль? <Link to='/login' className={`${styles.link}`}>Войти</Link></p>
    </div>
  );
}

export default ForgotPassword;
