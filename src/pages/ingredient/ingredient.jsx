import React from 'react';
import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import styles from './ingredient.module.css'

function Ingredient() {

  const ingredientInfo = {
    "_id": "60666c42cc7b410027a1a9b1",
    "name": "Краторная булка N-200i",
    "type": "bun",
    "proteins": 80,
    "fat": 24,
    "carbohydrates": 53,
    "calories": 420,
    "price": 1255,
    "image": "https://code.s3.yandex.net/react/code/bun-02.png",
    "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
    "__v": 0
  };

  return (
    <div className={`${styles.ingredientDetails} pt-30 pl-10 pr-10 pb-60`}>
      <h2 className={`${styles.ingredientHeader} text text_type_main-large`}> Детали ингредиента</h2 >
      <img className={`${styles.ingredientImage}`} alt={ingredientInfo.name} src={ingredientInfo.image_large} />
      <h3 className={`${styles.ingredientName} text text_type_main-medium pt-4 pb-8`} > {ingredientInfo.name}</h3 >
      <ul className={`${styles.nutritionalBlock}`} >
        <li className={`${styles.nutritionalValue}`} >
          <h4 className='text text_type_main-default'>Калории,ккал</h4>
          <p className='text text_type_digits-default'>{ingredientInfo.calories}</p>
        </li >
        <li className={`${styles.nutritionalValue}`} >
          <h4 className='text text_type_main-default'>Белки, г</h4>
          <p className='text text_type_digits-default'>{ingredientInfo.proteins}</p>
        </li >
        <li className={`${styles.nutritionalValue}`} >
          <h4 className='text text_type_main-default'>Жиры, г</h4>
          <p className='text text_type_digits-default'>{ingredientInfo.fat}</p>
        </li >
        <li className={`${styles.nutritionalValue}`} >
          <h4 className='text text_type_main-default'>Углеводы, г</h4>
          <p className='text text_type_digits-default'>{ingredientInfo.carbohydrates}</p>
        </li >
      </ul >
    </div >
  );
}

export default Ingredient;
