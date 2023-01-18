import React from 'react';
import { EmailInput, Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import styles from './register.module.css'

function Register() {
  return (
    <div className={styles.login}>
      <h2 className={`${styles.title} text text_type_main-medium`}>Регистрация</h2>
      <form className={styles.form}>
        <Input placeholder="Имя" value={""} isIcon={true} />
        <EmailInput placeholder="Логин" value={""} isIcon={true} />
        <PasswordInput placeholder="Пароль" value={''} isIcon={true} />
        <Button>Зарегестрироваться</Button>
      </form>
      <p className={`${styles.newUser} text text_type_main-default`}>Уже зарегестрированы? <Link to='/login' className={`${styles.link}`}>Войти</Link></p>
    </div>
  );
}

export default Register;
