import React from 'react';
import PropTypes from 'prop-types';
import BurgerConstructorClass from './BurgerConstructor.css';
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import {DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {Box} from '@ya.praktikum/react-developer-burger-ui-components';
import {Button} from '@ya.praktikum/react-developer-burger-ui-components';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';

const img = 'https://code.s3.yandex.net/react/code/bun-02-mobile.png';
const imgFilling = 'https://code.s3.yandex.net/react/code/meat-04-mobile.png';




const FillingElement = ({text, price, thumbnail}) => {
  return (
    <li className='filling-element mr-2'>
      <DragIcon type="primary"/> 
      <ConstructorElement
          text={text}
          price={price}
          thumbnail={thumbnail}
      />
    </li>
  )
}

FillingElement.propTypes = {
  text: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
}

function BurgerConstructor() {
  return ( 
    <section className='BurgerConstructor'>
      <div className='bun-element mr-4'>
        <ConstructorElement
         type="top"
         isLocked={true}
         text="Краторная булка N-200i (верх)"
         price={200}
         thumbnail={img}
       />
      </div>
      <ul className='burgerConstructor-filling mt-4 mb-4'>
        <FillingElement 
          text={"Говяжий метеорит (отбивная)"}
          price={9999}
          thumbnail={imgFilling}
        />
        <FillingElement 
          text={"Говяжий метеорит (отбивная)"}
          price={9999}
          thumbnail={imgFilling}
        />
        <FillingElement 
          text={"Говяжий метеорит (отбивная)"}
          price={9999}
          thumbnail={imgFilling}
        />
        <FillingElement 
          text={"Говяжий метеорит (отбивная)"}
          price={9999}
          thumbnail={imgFilling}
        />
        <FillingElement 
          text={"Говяжий метеорит (отбивная)"}
          price={9999}
          thumbnail={imgFilling}
        />
        <FillingElement 
          text={"Говяжий метеорит (отбивная)"}
          price={9999}
          thumbnail={imgFilling}
        />
      </ul>
      <div className='bun-element mr-4'>
        <ConstructorElement
         type="bottom"
         isLocked={true}
         text="Краторная булка N-200i (низ)"
         price={200}
         thumbnail={img}
       />
      </div>
      <div className='order-confirmation mt-10 mr-4'>
        <div className='total-cost'>
          <p className='text text_type_digits-medium'>650</p>
          <CurrencyIcon />
        </div>
        <Button type="primary" size="medium">
          Оформить заказ
        </Button>
      </div>
    </section>
   );
}

export default BurgerConstructor;