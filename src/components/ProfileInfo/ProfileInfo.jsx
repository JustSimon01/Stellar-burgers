import React, { useState } from 'react';
import { EmailInput, Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ProfileInfo.module.css'
import { updateUserData } from '../../services/actions/login';

function ProfileInfo() {
  const dispatch = useDispatch();
  const { email, name } = useSelector((store) => store.userInfo.user);
  const [disabled, setDisabled] = useState(true);
  const [userInfo, setUserInfo] = useState(
    {
      email: email,
      password: "",
      name: name
    })

  const onChange = e => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }

  const submitChanges = (e) => {
    e.preventDefault();
    dispatch(updateUserData(userInfo))
  }

  const canсelChanges = (e) => {
    setUserInfo({
      email: email,
      password: "",
      name: name
    })
  }

  return (
    <form onSubmit={submitChanges} className={`${styles.form} mt-30`}>
      <Input id='form1' placeholder="Имя" value={name} name={'name'} onChange={onChange} icon="EditIcon" disabled={disabled} onIconClick={() => setDisabled(false)} />
      <EmailInput placeholder="Логин" value={email} name={'email'} onChange={onChange} isIcon={true} />
      <PasswordInput placeholder="Пароль" value={userInfo.password} name={'password'} onChange={onChange} icon="EditIcon" />
      <div className={styles.buttons}>
        <Button htmlType="button" type="secondary" size="medium" onClick={canсelChanges}>Отменить</Button>
        <Button htmlType="submit" type="primary" size="medium">Сохранить</Button>
      </div>
    </form>
  );
}

export default ProfileInfo;
