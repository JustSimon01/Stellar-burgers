import React, { useState, useContext, useMemo } from 'react';
import styles from './BurgerConstructor.module.css';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import FillingElement from './FillingElement/FillingElement';
import BunElement from './BunElement/BunElement';
import { DataContext, OrderNumberContext } from '../../services/contextData';
import TotalPrice from '../TotalPrice/TotalPrice';
import { postOrderInfo } from '../../API/api';

function BurgerConstructor() {
  const [modalActive, setModalActive] = useState(false);
  const [order, setOrder] = useState({ number: '0', array: [] });
  const ingredients = useContext(DataContext); //массив всех ингридиентов
  const filling = useMemo(() => { return (ingredients.filter(item => item.type !== 'bun')) }, [ingredients])
  const bun = useMemo(() => { return (ingredients.find(item => item.type === 'bun')) }, [ingredients])
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

  function setOrderNumber() {
    postOrderInfo(arrayId)
      .then(data =>
        setOrder({ ...order, number: data.order.number })
      )
  }

  function orderConfirmation(arrayId) {
    setOrderNumber(arrayId);
    setModalActive(true);
  }

  return (
    <OrderNumberContext.Provider value={{ order, setOrder }}>
      <section className={`${styles.burgerConstructor}`}>
        <div className={`${styles.bun} mr-4`}>
          <BunElement product={bun} type={"top"} isLocked={true} />
        </div>
        <ul className={`${styles.filling} mt-4 mb-4`}>
          {filling.map((item) => {
            return <FillingElement data={item} key={item._id} />
          })}
        </ul>
        <div className={`${styles.bun} mr-4`}>
          <BunElement product={bun} type={"bottom"} isLocked={true} />
        </div>
        <div className={`${styles.orderConfirmation} mt-10 mr-4`}>
          <TotalPrice totalPrice={total} />
          <Button type="primary" size="medium" onClick={() => { orderConfirmation(arrayId) }}>
            Оформить заказ
          </Button>
        </div>
        {modalActive &&
          <Modal handleClose={() => setModalActive(false)}>
            <OrderDetails />
          </Modal>
        }
      </section>
    </OrderNumberContext.Provider>
  );
}

export default BurgerConstructor;