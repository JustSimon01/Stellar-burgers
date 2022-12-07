import React from 'react';
import styles from './FillingElement.module.css';
import { ingredientPropTypes } from '../../../utils/PropTypes';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';



const FillingElement = ({ data }) => {
  return (
    <li className={`${styles.fillingElement}  mr-2`}>
      <DragIcon type="primary" />
      <ConstructorElement className={`${styles.constructorWidth}`}
        text={data.name}
        price={data.price}
        thumbnail={data.image_mobile}
      />
    </li>
  )
}
FillingElement.propTypes = {
  data: ingredientPropTypes.isRequired,
}

export default FillingElement;