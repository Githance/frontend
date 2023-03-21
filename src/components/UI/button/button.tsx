import { FC } from 'react';
import cn from 'classnames';
import style from './button.module.css';

type Props = {
  type?: 'button' | 'submit' | 'reset';
  isValid: boolean;
  className?: string;
  children: any;
  onClick?: () => void;
};

const Button: FC<Props> = ({ type, isValid, className, children, onClick }) => {
  return (
    <button
      disabled={!isValid}
      className={cn(style.button, className)}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
