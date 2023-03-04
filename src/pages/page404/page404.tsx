import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './page404.module.css';
import { FC } from 'react';


const Page404: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.block}>
      <p className='text text_type_main-medium'>Ой!</p>
      <p className='text text_type_digits-large'>404</p>
      <h3 className='text text_type_main-medium'>Страница не найдена!</h3>
      <div className={styles.links}>
        <Button htmlType="button" type="secondary" size="medium" onClick={() => navigate('/')}>На главную</Button>
        <Button htmlType="button" type="secondary" size="medium" onClick={() => navigate('/login')}>Авторизоваться</Button>
      </div>
    </div>
  );
}

export default Page404;
