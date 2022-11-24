import React from 'react';
import PropTypes from 'prop-types';
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';

const BunElement = ({product, type, isLocked}) => {
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
  product: PropTypes.object, //хз что делать, вначале это строка, а потом становится объектом
  type: PropTypes.string,
  isLocked: PropTypes.bool,
}

export default BunElement;