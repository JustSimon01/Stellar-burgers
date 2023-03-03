import React, { useEffect } from 'react';
import { useSelector } from '../../types/hooks';
import styles from './OrderInfo.module.css'
import OrderIngredient from '../Orders/OrderIngredient/OrderIngredient';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import TotalPrice from '../TotalPrice/TotalPrice';
import { useNavigate, useParams } from 'react-router-dom';
import { FC } from 'react';
import { TOrder, TIngredient } from '../../types/types';

type TOrderInfo = {
  modal?: boolean,
  data: Array<TOrder>
}

const OrderInfo: FC<TOrderInfo> = ({ modal, data }) => {

  const navigate = useNavigate();
  const { id } = useParams();

  const currentOrderData = data.find(item => item._id === id);
  const allIngredients = useSelector((store) => store.ingredients.items);
  const orderingredients = currentOrderData?.ingredients.map((item) => allIngredients!.find((data) => data._id === item));

  const totalPrice = orderingredients?.reduce((previous, current) => previous + current?.price!, 0);
  const uniqueIngredients = currentOrderData?.ingredients.filter((element, index) => {
    return currentOrderData.ingredients.indexOf(element) === index;
  }).reverse();

  function Counter(arr: string[], id: string) {
    return arr.filter(item => item == id).length
  };

  useEffect(() => {
    if (data && !currentOrderData) {
      return (navigate('/*'))
    }
  }, [])

  return (
    <>
      {currentOrderData === undefined
        ? <p>Загрузка</p>
        : <div className={`${styles.orderBlock}`}>
          {modal
            ? <p className={`text text_type_digits-default mb-10`}>#{currentOrderData.number}</p>
            : <p className={`${styles.modal} text text_type_digits-default mb-10 mt-20`}>#{currentOrderData.number}</p>
          }
          <h3 className={`${styles.orderName} text text_type_main-medium mb-3`}>{currentOrderData.name}</h3>
          {currentOrderData.status === 'created' && (<p className={` text text_type_main-default`}>Создан</p>)}
          {currentOrderData.status === 'pending' && (<p className={`text text_type_main-default`}>Готовится</p>)}
          {currentOrderData.status === 'done' && (<p className={`${styles.orderDone} text text_type_main-default mb-15`}>Готов</p>)}
          <p className={`${styles.orderConsist} text text_type_main-medium mb-6`}>Состав:</p>
          <ul className={`${styles.blockWithScroll} mb-10`}>
            {uniqueIngredients!.map((item) => {
              const ingredientInfo = allIngredients!.find(ingredient => ingredient._id === item);
              return (<li className={`${styles.ingredientCard}`} key={ingredientInfo!._id}>
                <div className={`${styles.ingredient}`}>
                  <OrderIngredient intersection={false} id={item} />
                  <p className={`text text_type_main-default ml-4`}>{ingredientInfo!.name}</p>
                </div>
                <div className={`${styles.ingredientPriceBlock}`}>
                  <p className={`text text_type_digits-default mr-2`}>{Counter(currentOrderData.ingredients, item)} x {ingredientInfo!.price}</p>
                  <CurrencyIcon type="primary"/>
                </div>
              </li>)
            })}
          </ul>
          <div className={`${styles.bottomBlock}`}>
            <p className={`${styles.orderDate} text text_type_main-default `}><FormattedDate date={new Date(currentOrderData.createdAt)} /></p>
            <TotalPrice totalPrice={totalPrice!} />
          </div>
        </div >
      }
    </>
  );
}

export default OrderInfo;
