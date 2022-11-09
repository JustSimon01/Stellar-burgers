import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import modalClass from './ModalOverlay.css';


function ModalOverlay({handleClose}) {
  
  return (
    <div className='modal-overlay' onClick={handleClose}>
    </div>
  );
}

ModalOverlay.propTypes = {
  handleClose: PropTypes.func.isRequired
}

export default ModalOverlay;