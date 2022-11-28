import React from 'react';
/* eslint-disable */
//данные стили используются, но eslint выдает предупреждения в терминале
import PropTypes from 'prop-types';
import FillingElementClass from './FillingElement.css';
/* eslint-enable */
import { ingredientPropTypes } from '../../../utils/PropTypes';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';



const FillingElement = ({ data }) => {
  return (
    <li className='filling-element mr-2'>
      <DragIcon type="primary" />
      <ConstructorElement className='constructor-width'
        text={data.name}
        price={data.price}
        thumbnail={data.image_mobile}
      />
    </li>
  )
}

FillingElement.propTypes = {
  data: ingredientPropTypes.isRequired,
}

export default FillingElement;