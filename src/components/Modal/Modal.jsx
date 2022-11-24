import React, {useEffect} from 'react';
import ReactDom from "react-dom";
import PropTypes from 'prop-types';
import modalStyles from './Modal.css'
import { Typography, Box } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../ModalOverlay/ModalOverlay';


function Modal ({open, children, handleClose}) {

  useEffect(()=>{
    const closeEsc = (e) => (e.key === 'Escape' ? handleClose() : null)
    document.addEventListener('keydown', closeEsc);
    return () => document.removeEventListener('keydown', closeEsc);
})

  if (!open) return null;

  return ReactDom.createPortal( 
    <>
      <div className="Modal">
        <button className='close-button' onClick={handleClose}/>
        {children}
      </div>
      <ModalOverlay handleClose={handleClose}/>
    </>,
   document.getElementById('portal')
   )
}

Modal.propTypes = {
  children: PropTypes.object.isRequired, 
  handleClose: PropTypes.func.isRequired
}

export default Modal ;
