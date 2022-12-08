import React from 'react';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../../utils/PropTypes';
import styles from './IngredientBox.module.css'
import Ingredient from './Ingredient/Ingredient';

const IngredientBox = ({ titleId, title, mealType, data }) => {

  return (
    <>
      <h2 id={titleId} className='text text_type_main-medium'>{title}</h2>
      <ul className={`${styles.ingredientsBox} ml-4 mr-4`}>
        {data.map((item) =>
          <Ingredient data={item} mealType={mealType} key={item._id} />
        )}
      </ul>
    </>
  )
}

IngredientBox.propTypes = {
  title: PropTypes.string.isRequired,
  mealType: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
}

export default IngredientBox;
