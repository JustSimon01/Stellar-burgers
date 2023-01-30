import React, { useMemo } from 'react';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../../../utils/PropTypes';
import styles from './Ingredient.module.css'
import { addIngredientInfo } from '../../../../services/actions/ingredient';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag } from "react-dnd";
import { Link, useLocation } from 'react-router-dom';

const Ingredient = ({ data, mealType }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const constructorIngredients = useSelector((store) => store.constructorIngredients.ingredients);
  const constructorBuns = useSelector((store) => store.constructorIngredients.buns);

  const count = useMemo(() => {
    const allIngredients = [...constructorIngredients, ...constructorBuns]
    return allIngredients.filter(item => item._id === data._id).length;
  }, [constructorIngredients, constructorBuns])

  function handleClick() {
    dispatch(addIngredientInfo(data));
  }

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: data,
  });

  if (data.type === mealType) {
    return (
      <Link to={`/ingredients/${data._id}`} state={{ background: location }} ref={dragRef} className={`${styles.ingredient}`} onClick={handleClick}>
        {count === 0 ? null
          : <Counter count={count} size="default" extraClass="m-1" />
        }
        <img className={`${styles.img} pl-4 pr-4 pb-1`} src={data.image} />
        <div className={`${styles.price} pb-1`}>
          <p className='text text_type_digits-default'>{data.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <h3 className='text text_type_main-default'>{data.name}</h3>
      </Link>
    );
  }
}

Ingredient.propTypes = {
  data: ingredientPropTypes.isRequired,
  mealType: PropTypes.string.isRequired
}

export default Ingredient;
