import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModalOverlay.module.css';

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
