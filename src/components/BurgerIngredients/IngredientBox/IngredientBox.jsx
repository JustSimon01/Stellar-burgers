import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Box } from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientStyles from './IngredientBox.css'
import Modal from '../../Modal/Modal';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientDetails from '../../IngredientDetails/IngredientDetails';


const IngredientBox = ({title, mealType, data}) => {
  
  const [modalActive, setModalActive] = useState(false);
  const [ingredientsData, setIngredientsData] = useState({});

  function handleClose () {
    setModalActive(false);
    setIngredientsData({});
  }

  const Ingredient = ({data, mealType}) => {
    if (data.type === mealType) {
      return (
        <li className='ingredient' onClick={()=>{setIngredientsData(data); setModalActive(true)}}>
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
  
  return (
    <div>
      <h2 className='text text_type_main-medium'>{title}</h2>
      <ul className='ml-4 mr-4 ingredients-box '>
        {data.map((item) =>
          <Ingredient data={item} mealType={mealType} key={item._id}/>
        )}
      </ul>
      <Modal open={modalActive} handleClose={handleClose}>
        <IngredientDetails ingredientsData={ingredientsData}/>
      </Modal>
    </div>
  )
}

IngredientBox.propTypes = {
  title: PropTypes.string.isRequired,
  mealType: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
}

export default IngredientBox;
