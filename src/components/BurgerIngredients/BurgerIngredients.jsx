import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerIngredients.module.css';
import IngredientBox from './IngredientBox/IngredientBox'
import { DataContext } from '../../services/contextData';
import { ingredientPropTypes } from '../../utils/PropTypes';

function BurgerIngredients() {

  const data = useContext(DataContext);
  const [current, setCurrent] = useState('buns')

  function handleButtonClick(tab) {
    setCurrent(tab);
    const element = document.getElementById(tab);
    console.log(element);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className={`${styles.burgerIngredients} pt-10'`}>
      <h1 className='text text_type_main-large pb-5'>Соберите бургер</h1>
      <div className={`${styles.tabBlock} pb-10`}>
        <Tab className="text text_type_main-medium" value="buns" active={current === 'buns'} onClick={() => handleButtonClick("buns")}>
          Булки
        </Tab>
        <Tab className="text text_type_main-medium" value="sauces" active={current === 'sauces'} onClick={() => handleButtonClick("sauces")}>
          Соусы
        </Tab>
        <Tab className="text text_type_main-medium" value="main" active={current === 'main'} onClick={() => handleButtonClick("main")}>
          Начинки
        </Tab>
      </div>
      <div className={`${styles.blockWithScroll}`}>
        <IngredientBox titleId={"buns"} title={'Булки'} mealType={'bun'} data={data} />
        <IngredientBox titleId={"sauces"} title={'Соусы'} mealType={'sauce'} data={data} />
        <IngredientBox titleId={"main"} title={'Начинки'} mealType={'main'} data={data} />
      </div>
    </section>
  )
}


BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired
}

export default BurgerIngredients;