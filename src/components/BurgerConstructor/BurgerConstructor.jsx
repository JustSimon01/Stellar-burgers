import React, { useState, useEffect, useMemo, useCallback } from 'react';
import styles from './BurgerConstructor.module.css';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import FillingElement from './FillingElement/FillingElement';
import BunElement from './BunElement/BunElement';
import TotalPrice from '../TotalPrice/TotalPrice';
import { useDispatch, useSelector } from 'react-redux';
import { addIngredientInConstructor, addBunsInConstructor, deleteAllIngredients } from '../../services/actions/ingredients-constructor';
import { addOrderitems, deleteOrderInfo } from '../../services/actions/order';
import { sentOrderInformation } from '../../services/actions/order';
import { useDrop } from "react-dnd";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from 'react-router-dom';

function BurgerConstructor() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((store) => store.userInfo);
  const constructorIngredients = useSelector((store) => store.constructorIngredients.ingredients); //данные в конструкторе
  const constructorBuns = useSelector((store) => store.constructorIngredients.buns);
  const orderIsLoaded = useSelector((store) => store.orderInformation.isLoaded);

  const [modalActive, setModalActive] = useState(false);

  const total = useMemo(
    () => {
      let total = 0;
      constructorIngredients.map((item) => { total = total + item.price });
      constructorBuns.map((item) => { total = total + item.price });
      return total;
    },
    [constructorIngredients, constructorBuns]
  );

  function orderConfirmation() {
    if (!isAuthenticated) {
      return (navigate('/login'))
    }
    if (isAuthenticated) {
      const orderArray = [...constructorIngredients, ...constructorBuns]
      dispatch(addOrderitems(orderArray));
      dispatch(sentOrderInformation(orderArray));
      setModalActive(true);
    }
  }

  function closeModal() {
    dispatch(deleteOrderInfo());
    dispatch(deleteAllIngredients());
    setModalActive(false);
  }

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item) {
      if (item.type === 'bun') {
        dispatch(addBunsInConstructor([item, item]));
      } else {
        dispatch(addIngredientInConstructor({ ...item, id: uuidv4() }));
      }
    },
  });

  const [buttonState, setbuttonState] = useState(true);

  useEffect(() => {
    if (constructorBuns.length === 0 || constructorIngredients.length === 0) {
      setbuttonState(true)
    } else if ((constructorBuns.length > 0 && constructorIngredients.length > 0)) {
      setbuttonState(false)
    }
  }, [constructorBuns, constructorIngredients])

  return (
    <>
      <section ref={dropTarget} className={`${styles.burgerConstructor}`}>
        <div className={`${styles.bun} mr-4`}>
          <BunElement type={"top"} isLocked={true} />
        </div>

        <ul className={`${styles.filling} mt-4 mb-4`}>
          {constructorIngredients.length === 0
            ? <div className={`${styles.addIngredient} text text_type_main-large pb-8`}>Добавь Ингредиент!</div>
            : constructorIngredients.map((item, index) => {
              return <FillingElement data={item} key={item.id} index={index} id={item.id} />
            })
          }
        </ul>

        <div className={`${styles.bun} mr-4`}>
          <BunElement type={"bottom"} isLocked={true} />
        </div>
        <div className={`${styles.orderConfirmation} mt-10 mr-4`}>
          <TotalPrice totalPrice={total} />
          <Button disabled={buttonState} type="primary" size="medium" htmlType="button" onClick={orderConfirmation}>
            Оформить заказ
          </Button>
        </div>
        {
          modalActive &&
          <Modal handleClose={closeModal}>
            <OrderDetails />
          </Modal>
        }
      </section>
    </>
  );
}

export default BurgerConstructor;
