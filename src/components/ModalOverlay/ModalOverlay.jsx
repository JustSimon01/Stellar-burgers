import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable */
//данные стили используются, но eslint выдает предупреждения в терминале
import modalClass from './ModalOverlay.css';
/* eslint-enable */
function ModalOverlay({ handleClose }) {

  return (
    <div className='modal-overlay' onClick={handleClose}>
    </div>
  );
}

ModalOverlay.propTypes = {
  handleClose: PropTypes.func.isRequired
}

export default ModalOverlay;