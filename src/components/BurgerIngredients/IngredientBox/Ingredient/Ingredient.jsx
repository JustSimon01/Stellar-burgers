import React, { useState } from 'react';
import IngredientDetails from '../../../IngredientDetails/IngredientDetails';
import Modal from '../../../Modal/Modal';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../../../utils/PropTypes';


const Ingredient = ({ data, mealType }) => {

  const [modalActive, setModalActive] = useState(false);
  const [ingredientsData, setIngredientsData] = useState(null);

  function handleClose() {
    setModalActive(false);
    setIngredientsData(null);
  }

  function handleClick() {
    setIngredientsData(data);
    setModalActive(true);
  }

  if (data.type === mealType) {
    return (
      <>
        <li className='ingredient' onClick={() => handleClick()}>
          <Counter count={1} size="default" extraClass="m-1" />
          <img className='ingredient-img pl-4 pr-4 pb-1' src={data.image} />
          <div className='ingredient-price pb-1'>
            <p className='text text_type_digits-default'>{data.price}</p>
            <CurrencyIcon type="primary" />
          </div>
          <h3 className='text text_type_main-default'>{data.name}</h3>
        </li>
        {modalActive &&
          <Modal handleClose={handleClose}>
            <IngredientDetails ingredientsData={ingredientsData} />
          </Modal>
        }
      </>
    );
  }
}

Ingredient.propTypes = {
  data: ingredientPropTypes.isRequired,
  mealType: PropTypes.string.isRequired
}

export default Ingredient;