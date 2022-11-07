import React from 'react';
import modalStyles from './Modal.css'
import { Typography, Box } from '@ya.praktikum/react-developer-burger-ui-components';
import confirmImg from '../../images/confirm.svg'

function Modal () {
  return ( 
    <div className='Modal pt-30 pb-30 pr-25 pl-25'>
      <p className='text text_type_digits-large pb-8'>034536</p>
      <h3 className='text text_type_main-medium'>идентификатор заказа</h3>
      <img className='pt-15 pb-15' src={confirmImg} />
      <p className='text text_type_main-default pb-2'>Ваш заказ начали готовить</p>
      <p className='text text_type_main-default text-light-color'>Дождитесь готовности на орбитальной станции</p>
      <button className='close-button' />
    </div>
   );
}

export default Modal ;