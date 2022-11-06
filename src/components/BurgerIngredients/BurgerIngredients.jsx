import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';
import { Box } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientsStyles from './BurgerIngredients.css';
import blockWithScrollStyles from './block-with-scroll/block-with-scroll.css'
import Ingredient from './Ingredient/Ingredient'

function BurgerIngredients()  {
  const [current, setCurrent] = React.useState('one')
  return (
    <section className='BurgerIngredients pt-10 pb-10'>
    <h1 className='text text_type_main-large pb-5'>Соберите бургер</h1>
    <div style={{ display: 'flex' }} className='pb-10'>
      <Tab className="text text_type_main-medium" value="one" active={current === 'one'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab className="text text_type_main-medium" value="two" active={current === 'two'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab className="text text_type_main-medium" value="three" active={current === 'three'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
    <div className='block-with-scroll'>
      <Ingredient />

    </div>
    </section>
  )
}

export default BurgerIngredients;