import React, { useState } from 'react';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './reset-password.module.css'
import { Link } from 'react-router-dom';
import { postResetPassword } from '../../API/api';

function ResetPassword() {

  const [newPasswordInfo, setnewPasswordInfo] = useState(
    {
      newPassword: "",
      token: ""
    })

  const onChange = e => {
    setnewPasswordInfo({ ...newPasswordInfo, [e.target.name]: e.target.value });
  }

  return (
    <div className={styles.login}>
      <h2 className={`${styles.title} text text_type_main-medium`}>Восстановление пароля</h2>
      <form className={styles.form}>
        <PasswordInput placeholder="Введите новый пароль" value={newPasswordInfo.newPassword} name={'newPassword'} onChange={onChange} />
        <Input placeholder="Введите код из письма" value={newPasswordInfo.token} name={'token'} onChange={onChange} />
        <Button htmlType='button' onClick={() => postResetPassword(newPasswordInfo.newPassword, newPasswordInfo.token)}>Сохранить</Button>
      </form>
      <p className={`${styles.newUser} text text_type_main-default`}>Вспомнили пароль? <Link to='/login' className={`${styles.link}`}>Войти</Link></p>
    </div>

  );
}

export default ResetPassword;
