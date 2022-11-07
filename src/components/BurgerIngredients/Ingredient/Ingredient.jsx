import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientStyles from './Ingredient.css'

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';


const IngredientBox = ({title, mealType, data}) => {
  
  const Ingredient = ({_id, image, price, name, type}, mealType) => {
  
    if (type === mealType) {
      return (
        <li className='ingredient' key={_id}>
          <Counter count={1} size="default" extraClass="m-1" />
          <img className='ingredient-img pl-4 pr-4 pb-1' src={image} />
          <div className='ingredient-price pb-1'>
            <p className='text text_type_digits-default'>{price}</p>
            <CurrencyIcon type="primary" />
          </div>
          <h3 className='text text_type_main-default'>{name}</h3>
        </li>
      );
    }
  }
  
  Ingredient.propTypes = {
    _id: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
  }

  const LoadIngredients = ({mealType}) => {
    console.log(mealType)
    return data.map((item) => Ingredient(item, mealType))
  }

  return (
    <><div>
      <h2 className='text text_type_main-medium'>{title}</h2>
      <ul className='ml-4 mr-4 ingredients-box '>
        <LoadIngredients mealType={mealType}/>
      </ul>
      </div>
    </>
  )
}


export default IngredientBox;
