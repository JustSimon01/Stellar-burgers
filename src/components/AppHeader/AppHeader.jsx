import React from 'react';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';
import Constructor from './constructor/constructor';
import OrderFeed from './orderFeed/orderFeed';
import Profile from './profile/profile';

import AppHeaderStyles from './AppHeader.css';

class AppHeader extends React.Component {  
  render() {
    return (
      <header className="AppHeader text text_type_main-default">
        <menu className='menu'>
          <div className='menu-left'>
            <Constructor />
            <OrderFeed />
          </div>
          <div className="logo"><Logo /></div>
          <div className='menu-right'>
            <Profile />
          </div>
        </menu>
      </header>
    )
  }
}

export default AppHeader;