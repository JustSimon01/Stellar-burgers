import React from 'react';
import { EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './profile.module.css'

function Profile() {


  const [value, setValue] = React.useState('')
  const onChange = e => {
    setValue(e.target.value)
  }


  return (
    <div className={styles.login}>
      <h2 className={`${styles.title} text text_type_main-medium`}>Вход</h2>
      <form className={styles.form}>
        <Input placeholder="Имя" value={""} isIcon={true} />
        <EmailInput placeholder="Логин" value={""} isIcon={true} />
        <PasswordInput placeholder="Пароль" value={value} isIcon={true} onChange={onChange} />
      </form>
    </div>

  );
}

export default Profile;
