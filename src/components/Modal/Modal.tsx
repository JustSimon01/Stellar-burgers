import React, { useEffect } from 'react';
import ReactDom from "react-dom";
import styles from './Modal.module.css'
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { FC } from 'react';
const portal = document.getElementById('portal') as HTMLElement;

type TModal = {
  children: JSX.Element,
  handleClose: (() => void)
}

const Modal: FC<TModal> = ({ children, handleClose }) => {
  useEffect(() => {
    const closeEsc = (e: KeyboardEvent) => (e.key === 'Escape' ? handleClose() : null)
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
    portal
  )
}

export default Modal;
