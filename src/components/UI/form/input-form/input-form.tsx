import { FC } from 'react';
import cn from 'classnames';
import style from './input-form.module.css';

const InputForm: FC<any> = ({ ...props }) => {
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

export default InputForm;
