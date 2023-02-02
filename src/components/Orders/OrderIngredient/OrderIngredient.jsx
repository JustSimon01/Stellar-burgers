import React from 'react';
import styles from './OrderIngredient.module.css'

function OrderIngredient({ intersection }) {

  let className;
  switch (intersection) {
    case true:
      className = styles.intersection
      break;
    case false:
      className = ""
      break;
    default:
      break;
  }

  return (
    <div className={`${styles.frame} ${className}`}>
      <div className={styles.img}></div>
    </div>
  );
}

export default OrderIngredient;
