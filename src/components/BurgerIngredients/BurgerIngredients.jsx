import React, {useState, useEffect, useContext} from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';
import { Box } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientsStyles from './BurgerIngredients.css';
import IngredientBox from './IngredientBox/IngredientBox'
import { DataContext } from '../../contextData/contextData';

function BurgerIngredients()  {
  const data = useContext(DataContext);
  const [current, setCurrent] = useState('one')
  
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
  data: PropTypes.arrayOf(PropTypes.shape(
    {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired
    }
  )).isRequired
}

export default BurgerIngredients;