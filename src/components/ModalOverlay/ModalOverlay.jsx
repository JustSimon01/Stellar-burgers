import React, { useEffect } from 'react';
import Modal from '../Modal/Modal';
import modalClass from './ModalOverlay.css';


function ModalOverlay({active, setActive, children, stateReset}) {
  useEffect(()=>{
    const closeEsc = (e) => (e.key === 'Escape' ? setActive(false) : null)
    document.addEventListener('keydown', closeEsc);
    return () => document.removeEventListener('keydown', closeEsc);
})
  
  return (
    <div className={active ? "modal-overlay active" : "modal-overlay"} onClick={()=>{setActive(false); stateReset()}}>
      {children}
    </div>
  );
}

export default ModalOverlay;