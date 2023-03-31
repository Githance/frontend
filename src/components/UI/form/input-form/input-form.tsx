import { FC } from 'react';
import cn from 'classnames';
import style from './input-form.module.css';

type Props = {
  field: any;
  type: string;
  placeholder?: string;
  className?: string;
  id: string;
};
const InputForm: FC<Props> = ({ ...props }) => {
  return (
    <input
      {...props.field}
      autoComplete="on"
      type={props.type}
      id={props.id}
      placeholder={props.placeholder}
      className={cn(style.input, props.className)}
    />
  );
};

export default InputForm;
