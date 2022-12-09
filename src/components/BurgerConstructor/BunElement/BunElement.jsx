import React from 'react';
import PropTypes from 'prop-types';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import emptyBurger from '../../../images/empty-burger.png';

const BunElement = ({ type, isLocked }) => {

  const buns = useSelector((store) => store.constructorIngredients.buns);

  return (
    <>{buns.length === 0
      ? <ConstructorElement
        type={type}
        isLocked={isLocked}
        text={'Добавь булку!'}
        price={0}
        thumbnail={emptyBurger}
      />
      : <ConstructorElement
        type={type}
        isLocked={isLocked}
        text={`${buns[0].name} ${type === 'top' ? '(верх)' : '(низ)'}`}
        price={buns[0].price}
        thumbnail={buns[0].image_mobile}
      />
    }
    </>
  )
}

BunElement.propTypes = {
  type: PropTypes.string.isRequired,
  isLocked: PropTypes.bool.isRequired,
}

export default BunElement;