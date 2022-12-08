import React, { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerIngredients.module.css';
import IngredientBox from './IngredientBox/IngredientBox'
import { useSelector } from 'react-redux';

function BurgerIngredients() {

  const data = useSelector((store) => store.ingredients.items); // временная подгрузка данных

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



export default BurgerIngredients;