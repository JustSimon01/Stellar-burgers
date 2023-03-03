import React, { useState } from 'react';
import { EmailInput, Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import styles from './register.module.css';
import { postNewUser } from '../../API/api';
import { FC } from 'react';
import { useForm } from '../../types/hooks';

const Register: FC = () => {

  const {values, handleChange} = useForm(
    {
      email: "",
      password: "",
      name: ""
    })

  return (
    <div className={styles.login}>
      <h2 className={`${styles.title} text text_type_main-medium`}>Регистрация</h2>
      <form className={styles.form}>
        <Input placeholder="Имя" value={values.name} name={'name'} onChange={handleChange} />
        <EmailInput placeholder="E-mail" value={values.email} name={'email'} onChange={handleChange} />
        <PasswordInput placeholder="Пароль" value={values.password} name={'password'} onChange={handleChange} />
        <Button htmlType='button' onClick={() => postNewUser(values.email, values.password, values.name)}>Зарегестрироваться</Button>
      </form>
      <p className={`${styles.newUser} text text_type_main-default`}>Уже зарегестрированы? <Link to='/login' className={`${styles.link}`}>Войти</Link></p>
    </div>
  );
}

export default Register;
