import { FC } from 'react';
import cn from 'classnames';
import style from './input.module.css';
import { ErrorMessage } from '@hookform/error-message';
/* import style from './email-input.module.css'; */
import { useController } from 'react-hook-form';

const Input: FC<any> = ({ ...props }) => {
  return (
    <input
      {...props.field}
      autoComplete="on"
      type={props.type}
      placeholder={props.placeholder}
      className={cn(style.input, props.className)}
    />
  );
};

export default Input;
