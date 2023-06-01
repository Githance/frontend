import { FC, ReactNode, HTMLProps } from 'react';
import cn from 'classnames';
import style from './button.module.css';

interface Props extends HTMLProps<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  isValid: boolean;
  className?: string;
  children?: ReactNode;
}

const Button: FC<Props> = ({ isValid, className, children, type = 'button', ...rest }) => {
  return (
    <button disabled={!isValid} type={type} className={cn(style.button, className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
