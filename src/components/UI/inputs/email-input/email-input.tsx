import { FC } from 'react';
import cn from 'classnames';
import style from './email-input.module.css';
type Pattern = {
  value: number;
  message: string;
};

type Props = {
  placeholder: string;
  htmlFor: string;
  className: string;
  errorClassName: string;
  onChange: () => void;
  name: string;
  register: any;
  minLength: Pattern;
  maxLength: Pattern;
  pattern: Pattern;
};

const EmailInput: FC<Props> = ({
  register,
  minLength,
  maxLength,
  pattern,
  htmlFor,
  name,
  placeholder,
  className,
  errorClassName,
  onChange,
}) => {
  return (
    <input
      autoComplete="on"
      id={htmlFor}
      name={name}
      type="email"
      placeholder={placeholder}
      className={cn(style.input, className, errorClassName)}
      onChange={onChange}
      {...register(htmlFor, {
        required: 'Заполни меня',
        minLength: minLength,
        maxLength: maxLength,
        pattern: pattern,
      })}
    />
  );
};

export default EmailInput;
