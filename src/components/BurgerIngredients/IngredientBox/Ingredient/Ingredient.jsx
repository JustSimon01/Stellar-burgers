import React, { useMemo, useState } from 'react';
import IngredientDetails from '../../../IngredientDetails/IngredientDetails';
import Modal from '../../../Modal/Modal';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../../../utils/PropTypes';
import styles from './Ingredient.module.css'
import { addIngredientInfo, deleteIngredientInfo } from '../../../../services/reducers/ingredient';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag } from "react-dnd";

const Ingredient = ({ data, mealType }) => {
  const dispatch = useDispatch();
  const [modalActive, setModalActive] = useState(false);
  const constructorIngredients = useSelector((store) => store.constructorIngredients.ingredients); //данные в конструкторе

  //const count = (data) => console.log(constructorIngredients.filter(item => item._id === data._id));

  const count = useMemo(() => {
    return constructorIngredients.filter(item => item._id === data._id).length;
  }, [constructorIngredients])


  function handleClose() {
    setModalActive(false);
    dispatch(deleteIngredientInfo())
  }

  function handleClick() {
    console.log(data);
    setModalActive(true);
    dispatch(addIngredientInfo(data));
  }

  const { id, content } = data;
  const [, dragRef] = useDrag({
    type: "ingredient",
    item: data,
  });

  if (data.type === mealType) {
    return (
      <>
        <li ref={dragRef} className={`${styles.ingredient}`} onClick={() => handleClick()}>
          {count === 0 ? null
            : <Counter count={count} size="default" extraClass="m-1" />
          }
          <img className={`${styles.img} pl-4 pr-4 pb-1`} src={data.image} />
          <div className={`${styles.price} pb-1`}>
            <p className='text text_type_digits-default'>{data.price}</p>
            <CurrencyIcon type="primary" />
          </div>
          <h3 className='text text_type_main-default'>{data.name}</h3>
        </li>
        {modalActive &&
          <Modal handleClose={handleClose}>
            <IngredientDetails />
          </Modal>
        }
      </>
    );
  }
}

Ingredient.propTypes = {
  data: ingredientPropTypes.isRequired,
  mealType: PropTypes.string.isRequired
}

export default Ingredient;