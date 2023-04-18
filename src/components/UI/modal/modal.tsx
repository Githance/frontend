import { FC, ReactNode } from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import style from './modal.module.css';
import Overlay from './overlay/overlay';
import { CloseIcon } from '../index';

const modalRootElement = document.querySelector('#modal') as HTMLElement;

type Props = {
  children: ReactNode;
  onClose: () => void;
};

const Modal: FC<Props> = ({ children, onClose }) => {
  useEffect(() => {
    const escClose = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', escClose);

    return () => window.removeEventListener('keydown', escClose);
  }, []);

  return createPortal(
    <Overlay onClose={onClose}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={style.container}
        aria-hidden="true"
      >
        <button onClick={onClose} className={style.closeBtn}>
          <CloseIcon />
        </button>
        {children}
      </div>
    </Overlay>,

    modalRootElement,
  );
};
export default Modal;
