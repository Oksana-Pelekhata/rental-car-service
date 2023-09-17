import React from 'react';
import { useEffect } from 'react'
import { ModalBox, Overlay } from './Modal.styled';

const Modal = ({ children, close }) => {
    useEffect(() => {
        const handleESCClick = (e) => {
            console.log('esc')
            if (e.code === 'Escape') {
                close()
            }
        }
        document.addEventListener('keydown', handleESCClick)
        return () => {
            document.removeEventListener('keydown', handleESCClick)
        }
    }, [close]);

     const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      close();
    }
  };
  return (
      <Overlay onClick={handleBackdropClick}>
          <ModalBox>
               {children}
          </ModalBox>
    </Overlay>
  )
}

export default Modal