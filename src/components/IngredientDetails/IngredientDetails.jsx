import React from 'react';
import { Typography, Box } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientDetailsStyles from './IngredientDetails.css'


function IngredientDetails({ingredientsData}) {
  console.log(ingredientsData.name);
  return (
    <div className='ingredient-details pt-10 pl-10 pr-10 pb-60'>
      <h2 className='ingredient-header text text_type_main-large'>Детали ингредиента</h2>
      <img className='ingredient-image'src={ingredientsData.image_large}/>
      <h3 className='ingredient-name text text_type_main-medium pt-4 pb-8'>{ingredientsData.name}</h3>
      <ul className='nutritional-block mt-8 mb-15'>
        <li className='nutritional-value'>
          <h4 className='text text_type_main-default'>Калории,ккал</h4>
          <p className='text text_type_digits-default'>{ingredientsData.calories}</p>
        </li>
        <li className='nutritional-value'>
          <h4 className='text text_type_main-default'>Белки, г</h4>
          <p className='text text_type_digits-default'>{ingredientsData.proteins}</p>
        </li>
        <li className='nutritional-value'>
          <h4 className='text text_type_main-default'>Жиры, г</h4>
          <p className='text text_type_digits-default'>{ingredientsData.fat}</p>
        </li>
        <li className='nutritional-value'>
          <h4 className='text text_type_main-default'>Углеводы, г</h4>
          <p className='text text_type_digits-default'>{ingredientsData.carbohydrates}</p>
        </li>
      </ul>
    </div>
  );
}

export default IngredientDetails;