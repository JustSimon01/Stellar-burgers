import React, { Children } from 'react';
import modalStyles from './Modal.css'
import { Typography, Box } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from '../OrderDetails/OrderDetails';
import ModalOverlay from '../ModalOverlay/ModalOverlay';

function Modal ( {active, setActive, children, stateReset}) {
  
  return ( 
    <ModalOverlay active={active} setActive={setActive} stateReset={stateReset}>
    <div className={active ? "Modal active" : "Modal" } onClick={(e)=>e.stopPropagation()}>
      <button className='close-button' onClick={()=>{setActive(false); stateReset()}}/>
      {children}
    </div>
    </ModalOverlay>
   );
}

export default Modal ;

//pt-30 pb-30 pr-25 pl-25