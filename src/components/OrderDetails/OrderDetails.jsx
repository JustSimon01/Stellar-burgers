import React from 'react';
import OrderDetailsStyles from './OrderDetails.css'
import { Typography, Box, CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import confirmImg from '../../images/confirm.svg'

function OrderDetails() {
  return ( 
    <div className='order-detales'>
      <p className='text text_type_digits-large pb-8'>034536</p>
      <h3 className='text text_type_main-medium'>идентификатор заказа</h3>
      <img src={confirmImg} className='pt-15 pb-15' type="primary" />
      <p className='text text_type_main-default pb-2'>Ваш заказ начали готовить</p>
      <p className='text text_type_main-default order-detales-text-color'>Дождитесь готовности на орбитальной станции</p>
    </div>
   );
}

export default OrderDetails;