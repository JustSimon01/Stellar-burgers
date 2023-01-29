import React from 'react';
import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import styles from './ingredient.module.css'
import { useParams } from 'react-router-dom';

function Ingredient() {

  const { id } = useParams();
  const itemsLoaded = useSelector((store) => store.ingredients.items);
  const ingredientInfo = itemsLoaded.find(item => item._id === id);

  if (itemsLoaded && !ingredientInfo) {
    return (<>Ошибка!</>)//сделать отвод на 404
  }

  return (
    <>
      {!ingredientInfo
        ? <div>Загрузка...</div>
        : <div className={`${styles.ingredientDetails} pt-30 pl-10 pr-10 pb-60`}>
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
        </div >}
    </>
  );
}

export default Ingredient;
