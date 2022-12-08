import React, { useState, useEffect, useMemo } from 'react';
import styles from './BurgerConstructor.module.css';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import FillingElement from './FillingElement/FillingElement';
import BunElement from './BunElement/BunElement';
import TotalPrice from '../TotalPrice/TotalPrice';
import { useDispatch, useSelector } from 'react-redux';
import { setIngredientsConstructor, addIngredientInConstructor } from '../../services/reducers/ingredients-constructor';
import { addOrderitems, deleteOrderInfo } from '../../services/reducers/order';
import { sentOrderInformation } from '../../services/actions/order';

function BurgerConstructor() {
  const dispatch = useDispatch();
  const ingredientsArray = useSelector((store) => store.ingredients.items); //общий массив данных
  const constructorIngredients = useSelector((store) => store.constructorIngredients.ingredients); //данные в конструкторе

  //ф-я подгрузки ингридиентов
  const addIngrederntsInConstructor = (data) => {
    dispatch(setIngredientsConstructor(data));
  }
  //ф-я добавления ингридиентов
  const addIngredernt = (data) => {
    console.log(data)
    dispatch(addIngredientInConstructor([data]));
  }

  const [modalActive, setModalActive] = useState(false);
  const [order, setOrder] = useState({ number: '0', array: [] });

  const filling = useMemo(() => { return (ingredientsArray.filter(item => item.type !== 'bun')) }, [ingredientsArray]);
  //const filling = [];
  const bun = useMemo(() => { return (ingredientsArray.find(item => item.type === 'bun')) }, [ingredientsArray]);
  //const bun = []
  const array = useMemo(() => { return ([...filling, bun, bun]) }, [filling, bun]);  //массив из ингр. + 2 булки
  const arrayId = array.map(item => item._id); //массив всех id для отправки заказа на сервер

  const total = useMemo(
    () => {
      let total = 0;
      array.map((item) => total = total + item.price);
      return total;
    },
    [array]
  );

  function orderConfirmation(arrayId) {
    dispatch(addOrderitems(arrayId));
    dispatch(sentOrderInformation(arrayId));
    setModalActive(true);
  }

  function closeModal() {
    dispatch(deleteOrderInfo());
    setModalActive(false);
  }

  return (
    <>
      <button onClick={() => { addIngredernt(bun) }}>Закинуть данные</button>
      <section className={`${styles.burgerConstructor}`}>
        <div className={`${styles.bun} mr-4`}>
          <BunElement product={bun} type={"top"} isLocked={true} />
        </div>
        {/* ------------------ИНГРЕДИЕНТЫ---------------------- */}
        <ul className={`${styles.filling} mt-4 mb-4`}>
          {filling.map((item) => {
            return <FillingElement data={item} key={item._id} />
          })}
        </ul>
        {/* --------------------------------------------------- */}
        <div className={`${styles.bun} mr-4`}>
          <BunElement product={bun} type={"bottom"} isLocked={true} />
        </div>
        <div className={`${styles.orderConfirmation} mt-10 mr-4`}>
          <TotalPrice totalPrice={total} />
          <Button type="primary" size="medium" htmlType="button" onClick={() => { orderConfirmation(constructorIngredients) }}>
            Оформить заказ
          </Button>
        </div>
        {modalActive &&
          <Modal handleClose={() => closeModal()}>
            <OrderDetails />
          </Modal>
        }
      </section>
    </>
  );
}

export default BurgerConstructor;