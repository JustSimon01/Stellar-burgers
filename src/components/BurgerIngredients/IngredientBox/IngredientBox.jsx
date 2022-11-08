import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientStyles from './IngredientBox.css'
import Modal from '../../Modal/Modal';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientDetails from '../../IngredientDetails/IngredientDetails';


const IngredientBox = ({title, mealType, data}) => {
  
  const [modalActive, setModalActive] = React.useState(false);
  const [ingredientsData, setIngredientsData] = React.useState({});

  const Ingredient = (data, mealType) => {
    if (data.type === mealType) {
      return (
        <li className='ingredient' key={data._id} onClick={()=>{setIngredientsData(data); setModalActive(true)}}>
          <Counter count={1} size="default" extraClass="m-1" />
          <img className='ingredient-img pl-4 pr-4 pb-1' src={data.image} />
          <div className='ingredient-price pb-1'>
            <p className='text text_type_digits-default'>{data.price}</p>
            <CurrencyIcon type="primary" />
          </div>
          <h3 className='text text_type_main-default'>{data.name}</h3>
        </li>
      );
    }
  }
  
  Ingredient.propTypes = {
    _id: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
  }

  const LoadIngredients = ({mealType}) => {
    console.log(mealType)
    return data.map((item) => Ingredient(item, mealType))
  }

  return (
    <><div>
      <h2 className='text text_type_main-medium'>{title}</h2>
      <ul className='ml-4 mr-4 ingredients-box '>
        <LoadIngredients mealType={mealType}/>
      </ul>
      <Modal active={modalActive} setActive={setModalActive} stateReset={()=>setIngredientsData(false)}>
        <IngredientDetails ingredientsData={ingredientsData}/>
      </Modal>
      </div>
    </>
  )
}


export default IngredientBox;
