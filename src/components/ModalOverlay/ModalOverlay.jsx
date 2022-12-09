import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable */
//данные стили используются, но eslint выдает предупреждения в терминале
import styles from './ModalOverlay.module.css';
/* eslint-enable */
function ModalOverlay({ handleClose }) {

  return (
    <div className={`${styles.modalOverlay}`} onClick={handleClose}>
    </div>
  );
}

ModalOverlay.propTypes = {
  handleClose: PropTypes.func.isRequired
}

export default ModalOverlay;
