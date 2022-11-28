import React, { useContext } from 'react';
/* eslint-disable */
//данные стили используются, но eslint выдает предупреждения в терминале
import OrderDetailsStyles from './OrderDetails.css'
/* eslint-enable */
import confirmImg from '../../images/confirm.svg';
import { OrderNumberContext } from '../../services/contextData';

function OrderDetails() {
  const { order } = useContext(OrderNumberContext);
  const zeroLength = 6;
  const orderNumber = String(order.number).padStart(zeroLength, '0');

  return (
    <div className='order-detales'>
      <p className='text text_type_digits-large pb-8'>{orderNumber}</p>
      <h3 className='text text_type_main-medium'>идентификатор заказа</h3>
      <img src={confirmImg} alt='знак подтверждения заказа' className='pt-15 pb-15' type="primary" />
      <p className='text text_type_main-default pb-2'>Ваш заказ начали готовить</p>
      <p className='text text_type_main-default order-detales-text-color'>Дождитесь готовности на орбитальной станции</p>
    </div>
  );
}

export default OrderDetails;