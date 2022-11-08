import React from 'react';
import PropTypes from 'prop-types';
import modalStyles from './Modal.css'
import { Typography, Box } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from '../OrderDetails/OrderDetails';
import ModalOverlay from '../ModalOverlay/ModalOverlay';

function Modal ( {active, children, handleClose}) {
  
  return ( 
    <ModalOverlay active={active} handleClose={handleClose}>
    <div className={active ? "Modal active" : "Modal" } onClick={(e)=>e.stopPropagation()}>
      <button className='close-button' onClick={handleClose}/>
      {children}
    </div>
    </ModalOverlay>
   );
}

Modal.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired, 
  handleClose: PropTypes.func.isRequired
}

export default Modal ;
