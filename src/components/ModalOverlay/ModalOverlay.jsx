import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import modalClass from './ModalOverlay.css';


function ModalOverlay({active, children, handleClose}) {
  useEffect(()=>{
    const closeEsc = (e) => (e.key === 'Escape' ? handleClose() : null)
    document.addEventListener('keydown', closeEsc);
    return () => document.removeEventListener('keydown', closeEsc);
})
  
  return (
    <div className={active ? "modal-overlay active" : "modal-overlay"} onClick={handleClose}>
      {children}
    </div>
  );
}

ModalOverlay.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired, 
  handleClose: PropTypes.func.isRequired
}

export default ModalOverlay;