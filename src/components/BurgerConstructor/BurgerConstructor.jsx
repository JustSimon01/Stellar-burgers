import React, {useState, useEffect, useContext, useMemo, useReducer} from 'react';
import BurgerConstructorClass from './BurgerConstructor.css';
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import {Box} from '@ya.praktikum/react-developer-burger-ui-components';
import {Button} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import FillingElement from './FillingElement/FillingElement';
import BunElement from './BunElement/BunElement';
import { DataContext, TotalPriceContext, OrderNumberContext } from '../../contextData/contextData';
import TotalPrice from '../TotalPrice/TotalPrice';
import { postOrderInfo } from '../../API/api';

function BurgerConstructor() {
  const {totalPriceState, totalPriceDispatch}= useContext(TotalPriceContext);
  const {order, setOrder}= useContext(OrderNumberContext);
  const data = useContext(DataContext); //массив всех ингридиентов
  const ingredientsData = data.filter(item => item.type !== 'bun' ? item : null);
  const bunData = data.filter(item => item.type === 'bun' ? item : null);
  const bun = [bunData[0] === undefined ? '' : bunData[0]]; //не получается обратиться к булке иначе, выдает ошибку при значении undefined

  const array = bun.concat(ingredientsData, bun); //из-за undefined выдает NaN при первых подсчетах
  const arrayId = array.map(item => item._id);

  useEffect(
    () => {
      let total = 0;
      array.map(item => total = total + item.price);
      totalPriceDispatch({type: 'setTotalPrice', total: total});
    },
    [data]
  );

  function setOrderNumber() {
    postOrderInfo(arrayId)
    .then(data =>
      setOrder({...order, number:data.order.number})
    )
  }

  const [modalActive, setModalActive] = useState(false)

  return ( 
    <section className='burger-constructor'>
      <div className='bun-element mr-4'>
        <BunElement product={bun[0]} type={"top"} isLocked ={true}/>
      </div>
      <ul className='burger-constructor-filling mt-4 mb-4'>
        {ingredientsData.map((item) => {
              return <FillingElement data={item} key={item._id} />
            }
          )
        }
      </ul>
      <div className='bun-element mr-4'>
        <BunElement product={bun[0]} type={"bottom"} isLocked ={true}/>
      </div>
      <div className='order-confirmation mt-10 mr-4'>
        <TotalPrice/>
        <Button type="primary" size="medium" onClick={()=>{setOrderNumber(bunData); setModalActive(true)}}>
          Оформить заказ
        </Button>
      </div>
      <Modal open={modalActive} handleClose={()=>setModalActive(false)}>
        <OrderDetails/>
      </Modal>
    </section>
   );
}

export default BurgerConstructor;