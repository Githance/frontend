import { FC, ReactNode } from 'react';
import style from './overlay.module.css';
type Props = {
  onClose?: () => void;
  children: ReactNode;
};

const Overlay: FC<Props> = ({ onClose, children }) => {
  return (
    <div onClick={onClose} className={style.overlay} aria-hidden="true">
      {children}
    </div>
  );
};

export default Overlay;
