import React, { useContext } from 'react';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {Typography, Box} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './TotalPrice.module.css'
import { TotalPriceContext } from "../../contextData/contextData"

const TotalPrice = () => {
  const {totalPrice} = useContext(TotalPriceContext);

  return (
    <div className={styles.total}>
      <p className='text text_type_digits-medium'>
      {totalPrice.totalPrice}
      </p>
      <CurrencyIcon />
    </div>
  );
}
 
export default TotalPrice;