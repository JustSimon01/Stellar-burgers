import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './MenuSection.module.css';


function MenuSection({text, children}){

  return (
    <a href='#' className= {styles.section}>
      {children}
      <p className= {`${styles.text} text text_type_main-default`}>{text}</p>
    </a>
  )

}

export default MenuSection;