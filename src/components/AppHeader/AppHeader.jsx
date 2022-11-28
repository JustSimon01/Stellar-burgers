import React from 'react';
import { Logo, BurgerIcon, ProfileIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import MenuSection from './MenuSection/MenuSection';
/* eslint-disable */
//данные стили используются, но eslint выдает предупреждения в терминале
import AppHeaderStyles from './AppHeader.css';
/* eslint-disable */

class AppHeader extends React.Component {
  render() {
    return (
      <header className="app-header text text_type_main-default">
        <menu className='app-header-menu'>
          <div className='app-header-menu-left'>
            <MenuSection text="Конструктор"><BurgerIcon type="primary" /></MenuSection>
            <MenuSection text="Лента заказов"><ListIcon type="secondary" /></MenuSection>
          </div>
          <div className="app-header-logo"><Logo /></div>
          <div className='app-header-menu-right'>
            <MenuSection text="Личный кабинет"><ProfileIcon type="secondary" /></MenuSection>
          </div>
        </menu>
      </header>
    )
  }
}

export default AppHeader;