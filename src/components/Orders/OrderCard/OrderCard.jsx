import React, { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import TotalPrice from '../../TotalPrice/TotalPrice';
import OrderIngredient from '../OrderIngredient/OrderIngredient';
import styles from './OrderCard.module.css'

function OrderCard({ data, path }) {
  const location = useLocation();
  const allIngredients = useSelector((store) => store.ingredients.items);
  const uniqueIngredients = data.ingredients.filter((element, index) => {
    return data.ingredients.indexOf(element) === index;
  }).reverse();

  function Counter(arr, id) {
    return arr.filter(item => item == id).length
  };

  const [status, setStatus] = useState(
    {
      text: "",
      style: styles.defaultStatus,
      totalPrice: 0,
    });

  useEffect(() => {
    switch (data.status) {
      case 'done':
        setStatus({ ...status, text: "Готов", style: styles.complete, });
        break;
      case 'created':
        setStatus({ ...status, text: "Создан", style: styles.defaultStatus, });
        break;
      case 'pending':
        setStatus({ ...status, text: "Готовится", style: styles.defaultStatus, });
        break;
      default:
        break;
    }

    if (allIngredients.length !== 0) {
      const ingredients = data.ingredients.map((item) => allIngredients.find((data) => data._id === item));
      const totalPrice = ingredients.reduce((previous, current) => previous + current.price, 0)
      //      console.log(ingredients)
      setStatus({ ...status, totalPrice: totalPrice })
    }
  }, [data.status, allIngredients]);

  return (
    <>
      <Link to={`${path}/${data.number}`} className={`${styles.orderCard}`}>
        <p className={`${styles.number} text text_type_digits-default`}>#{data.number}</p>
        <p className={`${styles.date} text text_type_main-default`}>{data.createdAt}</p>
        <h4 className={`${styles.name} text text_type_main-medium`}>{data.name}</h4>
        <p className={`${styles.status} ${status.style} text text_type_main-default`}>{status.text}</p>
        <div className={`${styles.ingredients}`}>
          {uniqueIngredients.map((item) =>
            <OrderIngredient intersection id={item} key={item} counter={Counter(data.ingredients, item)} />
          )}
        </div>
        <div className={`${styles.total}`}>
          <TotalPrice totalPrice={status.totalPrice} />
        </div>

      </Link>
    </>
  );
}

export default OrderCard;
