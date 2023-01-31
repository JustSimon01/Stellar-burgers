import React, { useState } from 'react';
import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './forgot-password.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { sentVerificationEmail } from '../../services/actions/reset-password';
import { useDispatch } from 'react-redux';

function ForgotPassword() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [email, setEmail] = useState('')

  const onChange = e => {
    setEmail(e.target.value);
  }
  //переделать запрос, нужна переадресация
  const reqestNewPassword = (e) => {
    e.preventDefault();
    dispatch(sentVerificationEmail(email, () => navigate('/reset-password')));
  }

  return (
    <div className={styles.login}>
      <h2 className={`${styles.title} text text_type_main-medium`}>Восстановление пароля</h2>
      <form onSubmit={reqestNewPassword} className={styles.form}>
        <EmailInput placeholder="Укажите e-mail" onChange={onChange} value={email} />
        <Button htmlType="submit">Восстановить</Button>
      </form>
      <p className={`${styles.newUser} text text_type_main-default`}>Вспомнили пароль? <Link to='/login' className={`${styles.link}`}>Войти</Link></p>
    </div>
  );
}

export default ForgotPassword;
