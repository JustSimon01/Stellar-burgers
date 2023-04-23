import React, { useState } from 'react';
import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './forgot-password.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { sentVerificationEmail } from '../../services/actions/reset-password';
import { useDispatch } from '../../types/hooks';
import { FC } from 'react';
import { useForm } from '../../types/hooks';

const ForgotPassword: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {values, handleChange}  = useForm({
    email: "",
  });

  //переделать запрос, нужна переадресация
  const reqestNewPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(sentVerificationEmail(values.email, () => navigate('/reset-password')));
  }

  return (
    <div className={styles.login}>
      <h2 className={`${styles.title} text text_type_main-medium`}>Восстановление пароля</h2>
      <form onSubmit={reqestNewPassword} className={styles.form}>
        <EmailInput placeholder="Укажите e-mail" name={'email'} onChange={handleChange} value={values.email} />
        <Button htmlType="submit">Восстановить</Button>
      </form>
      <p className={`${styles.newUser} text text_type_main-default`}>Вспомнили пароль? <Link to='/login' className={`${styles.link}`}>Войти</Link></p>
    </div>
  );
}

export default ForgotPassword;
