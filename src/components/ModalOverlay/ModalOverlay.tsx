import React from 'react';
import styles from './ModalOverlay.module.css';
import { FC } from 'react';

const ModalOverlay: FC<{handleClose: (() => void)}> = ({ handleClose }) => {

  return (
    <div className={`${styles.modalOverlay}`} onClick={handleClose}>
    </div>
  );
}

export default ModalOverlay;
