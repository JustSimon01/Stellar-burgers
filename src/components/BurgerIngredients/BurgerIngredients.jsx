import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';
import { Box } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientsStyles from './BurgerIngredients.css';
import IngredientBox from './IngredientBox/IngredientBox'

function BurgerIngredients({data})  {
  const [current, setCurrent] = React.useState('one')
  return (
    <section className='burger-ingredients pt-10'>
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
      <IngredientBox title ={'Булки'} mealType={'bun'} data={data}/>
      <IngredientBox title ={'Соусы'} mealType={'sauce'} data={data}/>
      <IngredientBox title ={'Начинки'} mealType={'main'} data={data}/>
    </div>
    </section>
  )
}

BurgerIngredients.propTypes = {
  data: PropTypes.array.isRequired
}

export default BurgerIngredients;