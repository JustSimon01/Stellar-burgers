import React from 'react';
import styles from './IngredientBox.module.css'
import Ingredient from './Ingredient/Ingredient';
import { FC } from 'react';
import { TIngredient } from '../../../types/types';

type TIngredientBox = {
  titleId: any,
  title: string,
  mealType: string,
  data: TIngredient[],
  innerRef: any
}

const IngredientBox: FC<TIngredientBox> = ({ titleId, title, mealType, data, innerRef }) => {

  return (
    <>
      <h2 ref={innerRef} id={titleId} className='text text_type_main-medium'>{title}</h2>
      <ul className={`${styles.ingredientsBox} ml-4 mr-4`}>
        {data.map((item) =>
          <Ingredient data={item} mealType={mealType} key={item._id} />
        )}
      </ul>
    </>
  )
}

export default IngredientBox;
