import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import BurgerConstructorClass from './BurgerConstructor.css';
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import {Box} from '@ya.praktikum/react-developer-burger-ui-components';
import {Button} from '@ya.praktikum/react-developer-burger-ui-components';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import FillingElement from './FillingElement/FillingElement';

const img = 'https://code.s3.yandex.net/react/code/bun-02-mobile.png';
const imgFilling = 'https://code.s3.yandex.net/react/code/meat-04-mobile.png';



function BurgerConstructor({data}) {

  const buns = data.filter(item=> item.type === 'bun' ? item : null);
  const bun = buns[0] === undefined ? "" : buns[0];

  const [modalActive, setModalActive] = useState(false)

  return ( 
    <section className='burger-constructor'>
      <div className='bun-element mr-4'>
        <ConstructorElement
         type="top"
         isLocked={true}
         text={`${bun.name} (верх)`}
         price={bun.price}
         thumbnail={bun.image_mobile}
       />
      </div>
      <ul className='burger-constructor-filling mt-4 mb-4'>
        {data.map((item) => {
          if (item.type !== "bun"){
            return <FillingElement data={item} key={item._id} />
            }}
          )
        }
      </ul>
      <div className='bun-element mr-4'>
      <ConstructorElement
         type="bottom"
         isLocked={true}
         text={`${bun.name} (низ)`}
         price={bun.price}
         thumbnail={bun.image_mobile}
       />
      </div>
      <div className='order-confirmation mt-10 mr-4'>
        <div className='total-cost'>
          <p className='text text_type_digits-medium'>650</p>
          <CurrencyIcon />
        </div>
        <Button type="primary" size="medium" onClick={()=>setModalActive(true)}>
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