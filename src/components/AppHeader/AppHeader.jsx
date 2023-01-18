import React from 'react';
import { Logo, BurgerIcon, ProfileIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import MenuSection from './MenuSection/MenuSection';
import styles from './AppHeader.module.css';


function AppHeader() {

  return (
    <header className={`${styles.appHeader} text text_type_main-default`}>
      <menu className={styles.appHeaderMenu}>
        <div className={styles.appHeaderMenuLeft}>
          <MenuSection text="Конструктор" link={'/'} active={true}><BurgerIcon type="primary" /></MenuSection>
          <MenuSection text="Лента заказов" link={'/login'}><ListIcon type="secondary" /></MenuSection>
        </div>
        <div className={styles.appHeaderLogo}><Logo /></div>
        <div className={styles.appHeaderMenuRight}>
          <MenuSection text="Личный кабинет" link={'/profile'}><ProfileIcon type="secondary" /></MenuSection>
        </div>
      </menu>
    </header>
  )

}

export default AppHeader;
