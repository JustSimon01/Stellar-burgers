import React, { useState } from 'react';
import { Logo, BurgerIcon, ProfileIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useLocation } from 'react-router-dom';
import MenuSection from './MenuSection/MenuSection';
import styles from './AppHeader.module.css';

function AppHeader() {
  const location = useLocation();

  return (
    <header className={`${styles.appHeader} text text_type_main-default`}>
      <menu className={styles.appHeaderMenu}>
        <div className={styles.appHeaderMenuLeft}>
          <MenuSection text="Конструктор" link={'/'} active={location.pathname === "/" ? true : false} >
            <BurgerIcon type={location.pathname === "/" ? 'primary' : 'secondary'} />
          </MenuSection>
          <MenuSection text="Лента заказов" link={'/orders'} active={location.pathname === "/orders" ? true : false}>
            <ListIcon type={location.pathname === "/orders" ? 'primary' : 'secondary'} />
          </MenuSection>
        </div>
        <div className={styles.appHeaderLogo}><Logo /></div>
        <div className={styles.appHeaderMenuRight}>
          <MenuSection text="Личный кабинет" link={'/profile'} name={'profile'} active={location.pathname === "/profile" ? true : false} >
            <ProfileIcon type={location.pathname === "/profile" ? 'primary' : 'secondary'} />
          </MenuSection>
        </div>
      </menu>
    </header>
  )

}

export default AppHeader;
