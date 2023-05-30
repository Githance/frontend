import { FC, ReactNode } from 'react';
import cn from 'classnames';
import style from './button.module.css';

type Props = {
  type: 'button' | 'submit' | 'reset';
  isValid: boolean;
  className?: string;
  children?: ReactNode;
};

const Button: FC<Props> = ({ isValid, className, children, ...rest }) => {
  console.log(rest);
  return (
    <button disabled={!isValid} className={cn(style.button, className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
