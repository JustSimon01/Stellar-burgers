import React from 'react';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../../utils/PropTypes';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

const BunElement = ({ product, type, isLocked }) => {
  return (
    <ConstructorElement
      type={type}
      isLocked={isLocked}
      text={`${product.name} ${type === 'top' ? '(верх)' : '(низ)'}`}
      price={product.price}
      thumbnail={product.image_mobile}
    />
  )
}

BunElement.propTypes = {
  product: ingredientPropTypes.isRequired,
  type: PropTypes.string.isRequired,
  isLocked: PropTypes.bool.isRequired,
}

export default BunElement;