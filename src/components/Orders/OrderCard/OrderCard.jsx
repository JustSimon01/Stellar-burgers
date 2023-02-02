import React from 'react';
import TotalPrice from '../../TotalPrice/TotalPrice';
import OrderIngredient from '../OrderIngredient/OrderIngredient';
import styles from './OrderCard.module.css'

function OrderCard() {
  return (
    <div className={`${styles.orderCard}`}>
      <p className={`${styles.number} text text_type_digits-default`}>#034535</p>
      <p className={`${styles.date} text text_type_main-default`}>Сегодня, 16:20 i-GMT+3</p>
      <h4 className={`${styles.name} text text_type_main-medium`}>Death Star Starship Main бургер</h4>
      <p className={`${styles.status} ${styles.complete} text text_type_main-default`}>Готов</p>
      <div className={`${styles.ingredients}`}>
        <OrderIngredient intersection />
        <OrderIngredient intersection />
      </div>
      <div className={`${styles.total}`}>
        <TotalPrice totalPrice={0} />
      </div>

    </div>
  );
}

export default OrderCard;
