import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import style from './modal.module.css';
import Overlay from './overlay/overlay';
import { CloseIcon } from '../index';
import cn from 'classnames';

const modalRootElement = document.querySelector('#modal') as HTMLElement;

type Props = {
  children: ReactNode;
  onClose: () => void;
  closeIcon?: boolean;
};

const Modal: FC<Props> = ({ children, onClose, closeIcon = true }) => {
  return createPortal(
    <Overlay onClose={onClose}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={cn(closeIcon ? style.container : style.mini_container)}
        aria-hidden="true"
      >
        {closeIcon && (
          <button onClick={onClose} className={style.closeBtn}>
            <CloseIcon />
          </button>
        )}
        {children}
      </div>
    </Overlay>,

    modalRootElement,
  );
};
export default Modal;
