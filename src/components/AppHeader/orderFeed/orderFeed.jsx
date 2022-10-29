import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './menu-section.module.css';


function OrderFeed(){

  return (
    <div className= {styles.section}>
      <ListIcon type="secondary" />
      <p className= {styles.text}>Лента заказов</p>
    </div>
  )

}

export default OrderFeed;