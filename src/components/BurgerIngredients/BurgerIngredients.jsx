import React, { useState, useRef, useEffect } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerIngredients.module.css';
import IngredientBox from './IngredientBox/IngredientBox'
import { useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';

function BurgerIngredients() {
  const data = useSelector((store) => store.ingredients.items); //подгрузка данных из стора

  const [current, setCurrent] = useState('buns'); //стейт табов

  function handleButtonClick(tab) {
    setCurrent(tab);
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }

  const [bunsRef, bunsInView] = useInView({ threshold: 0 });
  const [sausesRef, sausesInView] = useInView({ threshold: 0 });
  const [mainRef, mainInView] = useInView({ threshold: 0 });

  useEffect(() => {
    if (bunsInView) {
      setCurrent("buns");
    } else if (sausesInView) {
      setCurrent("sauces");
    } else if (mainInView) {
      setCurrent("main");
    }
  }, [bunsInView, sausesInView, mainInView]);

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
        <IngredientBox innerRef={bunsRef} titleId={"buns"} title={'Булки'} mealType={'bun'} data={data} />
        <IngredientBox innerRef={sausesRef} titleId={"sauces"} title={'Соусы'} mealType={'sauce'} data={data} />
        <IngredientBox innerRef={mainRef} titleId={"main"} title={'Начинки'} mealType={'main'} data={data} />
      </div>
    </section>
  )
}

export default BurgerIngredients;
