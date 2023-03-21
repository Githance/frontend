import { FC } from 'react';
import cn from 'classnames';
import style from './text-input.module.css';

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

const TextInput: FC<Props> = ({
  register,
  minLength,
  maxLength,
  pattern,
  htmlFor,
  placeholder,
  name,
  className,
  errorClassName,
  onChange,
}) => {
  return (
    <input
      autoComplete="on"
      id={htmlFor}
      name={name}
      type="text"
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

export default TextInput;
