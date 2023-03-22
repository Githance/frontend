import { FC, useState } from 'react';
import style from './password-input.module.css';
import cn from 'classnames';

type Pattern = {
  value?: number;
  message?: string;
};

type Props = {
  placeholder: string;
  htmlFor: string;
  className: string;
  errorClassName?: string;
  onChange?: () => void;
  name?: string;
  register: any;
  validationSchema?: {
    minLength?: Pattern;
    maxLength?: Pattern;
    pattern?: Pattern;
  };
};

const PasswordInput: FC<Props> = ({
  register,
  validationSchema,
  htmlFor,
  placeholder,
  name,
  className,
  errorClassName,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <div className={cn(style.container, className)}>
      <input
        autoComplete="on"
        id={htmlFor}
        name={name}
        type={showPassword ? 'password' : 'text'}
        placeholder={placeholder}
        className={cn(style.input, errorClassName)}
        onChange={onChange}
        {...register(htmlFor, {
          required: 'Заполни меня',
          minLength: validationSchema?.minLength,
          maxLength: validationSchema?.maxLength,
          pattern: validationSchema?.pattern,
        })}
      />
      <button
        className={`${style.input__button} ${
          showPassword ? style.input__button_close : style.input__button_open
        }`}
        type="button"
        onClick={() => setShowPassword(!showPassword)}
      ></button>
    </div>
  );
};

export default PasswordInput;
