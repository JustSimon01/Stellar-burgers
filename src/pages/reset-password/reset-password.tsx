import React, { useState } from 'react';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './reset-password.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from '../../types/hooks';
import { resetPassword } from '../../services/actions/reset-password';
import { FC } from 'react';
import { useForm } from '../../types/hooks';

const ResetPassword: FC = () => {
  const dispatch = useDispatch();
  const { verificationSent } = useSelector((store) => store.resetPassword);
  const navigate = useNavigate();
  const {values, handleChange} = useForm(
    {
      newPassword: "",
      token: ""
    })

  const setNewPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(resetPassword(values.newPassword, values.token));
    navigate('/login')
  }

  if (!verificationSent) {
    navigate('/forgot-password')
  }

  return (
    <div className={styles.login}>
      <h2 className={`${styles.title} text text_type_main-medium`}>Восстановление пароля</h2>
      <form onSubmit={setNewPassword} className={styles.form}>
        <PasswordInput placeholder="Введите новый пароль" value={values.newPassword} name={'newPassword'} onChange={handleChange} />
        <Input placeholder="Введите код из письма" value={values.token} name={'token'} onChange={handleChange} />
        <Button htmlType='submit'>Сохранить</Button>
      </form>
      <p className={`${styles.newUser} text text_type_main-default`}>Вспомнили пароль? <Link to='/login' className={`${styles.link}`}>Войти</Link></p>
    </div>

  );
}

export default ResetPassword;
