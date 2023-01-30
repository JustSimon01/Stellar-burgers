import React, { useEffect } from 'react';
import ReactDom from "react-dom";
import PropTypes from 'prop-types';
import styles from './Modal.module.css'
import ModalOverlay from '../ModalOverlay/ModalOverlay';

function Modal({ children, handleClose }) {
  useEffect(() => {
    const closeEsc = (e) => (e.key === 'Escape' ? handleClose() : null)
    document.addEventListener('keydown', closeEsc);
    return () => document.removeEventListener('keydown', closeEsc);
  }, [handleClose])

  return ReactDom.createPortal(
    <>
      <div className={`${styles.modal}`}>
        <button className={`${styles.closeButton}`} onClick={handleClose} />
        {children}
      </div>
      <ModalOverlay handleClose={handleClose} />
    </>,
    document.getElementById('portal')
  )
}

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired
}

export default Modal;
