import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './MenuSection.module.css';


function MenuSection({text, children}){

  return (
    <div className= {styles.section}>
      {children}
      <p className= {styles.text}>{text}</p>
    </div>
  )

}

export default MenuSection;