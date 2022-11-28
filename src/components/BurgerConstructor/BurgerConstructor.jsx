import React, { useState, useContext, useMemo, useReducer } from 'react';
/* eslint-disable */
//данные стили используются, но eslint выдает предупреждения в терминале
import BurgerConstructorClass from './BurgerConstructor.css';
/* eslint-enable */
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import FillingElement from './FillingElement/FillingElement';
import BunElement from './BunElement/BunElement';
import { DataContext, TotalPriceContext, OrderNumberContext } from '../../services/contextData';
import TotalPrice from '../TotalPrice/TotalPrice';
import { postOrderInfo } from '../../API/api';
import { reducer, totalPriceInitialState } from '../../services/reducer';

function BurgerConstructor() {
  const [modalActive, setModalActive] = useState(false);
  const [totalPrice, totalPriceDispatch] = useReducer(reducer, totalPriceInitialState);
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
      //в задании рекомендуют попрактиковаться с useReduser при подсчете цены, получилось только так
      //но можно просто передать значение как пропс в TotalPrice, без диспатча
      totalPriceDispatch({ type: 'setTotalPrice', total: total });
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
    totalPriceDispatch({ type: 'setTotalPrice', total: 5 })
  }

  return (
    <OrderNumberContext.Provider value={{ order, setOrder }}>
      <TotalPriceContext.Provider value={{ totalPrice, totalPriceDispatch }}>
        <section className='burger-constructor'>
          <div className='bun-element mr-4'>
            <BunElement product={bun} type={"top"} isLocked={true} />
          </div>
          <ul className='burger-constructor-filling mt-4 mb-4'>
            {filling.map((item) => {
              return <FillingElement data={item} key={item._id} />
            })}
          </ul>
          <div className='bun-element mr-4'>
            <BunElement product={bun} type={"bottom"} isLocked={true} />
          </div>
          <div className='order-confirmation mt-10 mr-4'>
            <TotalPrice />
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
      </TotalPriceContext.Provider>
    </OrderNumberContext.Provider>
  );
}

export default BurgerConstructor;