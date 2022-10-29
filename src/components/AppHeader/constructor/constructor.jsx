import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './menu-section.module.css';


function Constructor(){

  return (
    <div className= {styles.section}>
      <BurgerIcon type="secondary" />
      <p className= {styles.text}>Конструктор</p>
    </div>
  )

}

export default Constructor;