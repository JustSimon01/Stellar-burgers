import React, { useState } from 'react';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './reset-password.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../../services/actions/reset-password';
import { FC } from 'react';

const ResetPassword: FC = () => {
  const dispatch = useDispatch();
  const { verificationSent } = useSelector((store: any) => store.resetPassword);
  const navigate = useNavigate();
  const [newPasswordInfo, setnewPasswordInfo] = useState(
    {
      newPassword: "",
      token: ""
    })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setnewPasswordInfo({ ...newPasswordInfo, [e.target.name]: e.target.value });
  }

  const setNewPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(resetPassword(newPasswordInfo.newPassword, newPasswordInfo.token));
    navigate('/login')
  }

  if (!verificationSent) {
    navigate('/forgot-password')
  }

  return (
    <div className={styles.login}>
      <h2 className={`${styles.title} text text_type_main-medium`}>Восстановление пароля</h2>
      <form onSubmit={setNewPassword} className={styles.form}>
        <PasswordInput placeholder="Введите новый пароль" value={newPasswordInfo.newPassword} name={'newPassword'} onChange={onChange} />
        <Input placeholder="Введите код из письма" value={newPasswordInfo.token} name={'token'} onChange={onChange} />
        <Button htmlType='submit'>Сохранить</Button>
      </form>
      <p className={`${styles.newUser} text text_type_main-default`}>Вспомнили пароль? <Link to='/login' className={`${styles.link}`}>Войти</Link></p>
    </div>

  );
}

export default ResetPassword;
