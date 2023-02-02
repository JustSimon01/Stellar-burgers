import React from 'react';
import styles from './order.module.css'
import OrderIngredient from '../../components/Orders/OrderIngredient/OrderIngredient';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import TotalPrice from '../../components/TotalPrice/TotalPrice';

function Order() {

  return (
    <div className={`${styles.orderBlock}`}>
      <p className={`${styles.orderNumber} text text_type_digits-default mb-10`}>#034535</p>
      <h3 className={`${styles.orderName} text text_type_main-medium mb-3`}>Death Star Starship Main бургер</h3>
      <p className={`${styles.orderDone} text text_type_main-default mb-15`}>Выполнен</p>
      <p className={`${styles.orderConsist} text text_type_main-medium mb-6`}>Состав:</p>
      <ul className={`${styles.blockWithScroll} mb-10`}>

        <li className={`${styles.ingredientCard}`}>
          <div className={`${styles.ingredient}`}>
            <OrderIngredient />
            <p className={`text text_type_main-default ml-4`}>Флюоресцентная булка R2-D3</p>
          </div>
          <div className={`${styles.ingredientPriceBlock}`}>
            <p className={`text text_type_digits-default mr-2`}>1 x 300</p>
            <CurrencyIcon />
          </div>
        </li>

      </ul>
      <div className={`${styles.bottomBlock}`}>
        <p className={`${styles.orderDate} text text_type_main-default`}>Сегодня, 16:20 i-GMT+3</p>
        <TotalPrice totalPrice={0} />
      </div>
    </div >
  );
}

export default Order;
