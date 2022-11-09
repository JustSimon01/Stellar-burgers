import React from 'react';
import PropTypes from 'prop-types';
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import {DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import FillingElementClass from './FillingElement.css'


const FillingElement = ({data}) => {
  return (
    <li className='filling-element mr-2'>
      <DragIcon type="primary"/> 
      <ConstructorElement className='constructor-width'
          text={data.name}
          price={data.price}
          thumbnail={data.image_mobile}
      />
    </li>
  )
}

FillingElement.propTypes = {
  text: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
}

export default FillingElement;