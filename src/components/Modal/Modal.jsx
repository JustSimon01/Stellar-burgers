import React, { useEffect } from 'react';
import ReactDom from "react-dom";
import PropTypes from 'prop-types';
/* eslint-disable */
//данные стили используются, но eslint выдает предупреждения в терминале
import modalStyles from './Modal.css'
/* eslint-enable */
import ModalOverlay from '../ModalOverlay/ModalOverlay';

function Modal({ children, handleClose }) {

  useEffect(() => {
    const closeEsc = (e) => (e.key === 'Escape' ? handleClose() : null)
    document.addEventListener('keydown', closeEsc);
    return () => document.removeEventListener('keydown', closeEsc);
  }, [handleClose])

  return ReactDom.createPortal(
    <>
      <div className="Modal">
        <button className='close-button' onClick={handleClose} />
        {children}
      </div>
      <ModalOverlay handleClose={handleClose} />
    </>,
    document.getElementById('portal')
  )
}

Modal.propTypes = {
  children: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired
}

export default Modal;
