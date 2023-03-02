import React, {useEffect, useState } from 'react';
import { EmailInput, Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from '../../types/hooks';
import styles from './ProfileInfo.module.css'
import { updateUserData } from '../../services/actions/login';
import { FC } from 'react';

const ProfileInfo: FC = () => {
  const dispatch = useDispatch();
  const { email, name } = useSelector((store) => store.userInfo.user);
  const [disabled, setDisabled] = useState(true);
  const [userInfo, setUserInfo] = useState(
    {
      email: "",
      password: "",
      name: ""
    })

  useEffect(() => {
      setUserInfo({ ...userInfo, name: name, email: email });
    }, [email, name]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }

  const submitChanges = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateUserData(userInfo))
  }

  const canсelChanges = () => {
    setUserInfo({
      email: email,
      password: "",
      name: name
    })
  }

  return (
    <>{
      userInfo &&
      <form onSubmit={submitChanges} className={`${styles.form} mt-30`}>
      <Input id='form1' placeholder="Имя" value={userInfo.name} name={'name'} onChange={onChange} icon="EditIcon" disabled={disabled} onIconClick={() => setDisabled(false)} />
      <EmailInput placeholder="Логин" value={userInfo.email} name={'email'} onChange={onChange} isIcon={true} />
      <PasswordInput placeholder="Пароль" value={userInfo.password} name={'password'} onChange={onChange} icon="EditIcon" />
      <div className={styles.buttons}>
        <Button htmlType="button" type="secondary" size="medium" onClick={canсelChanges}>Отменить</Button>
        <Button htmlType="submit" type="primary" size="medium">Сохранить</Button>
      </div>
    </form>
    }</>

  );
}

export default ProfileInfo;
