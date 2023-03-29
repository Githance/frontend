import React, { FC, useState } from 'react';
import { useController } from 'react-hook-form';
import style from './inputs.module.css';
import cn from 'classnames';
import { Input, InputMessage } from '../UI';
import { Link } from 'react-router-dom';

const PasswordInput: FC<any> = ({ control, name, placeholder = 'Password' }) => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    field,
    fieldState: { invalid, isDirty },
    formState: { errors },
  } = useController({
    control,
    name,
    rules: { required: 'Заполни меня', minLength: { value: 8, message: 'Минимум 8 символов' } },
  });

  return (
    <div>
      <div className={style.container}>
        <Input
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          field={field}
          className={cn(
            invalid ? style.validation_false : isDirty ? style.validation_success : undefined,
          )}
        />
        <button
          className={cn(style.icon, showPassword ? style.icon_open : style.icon_close)}
          type="button"
          onClick={() => setShowPassword(!showPassword)}
        ></button>
      </div>
      {errors?.password?.message && (
        <InputMessage type="error" message={errors?.password?.message} />
      )}
    </div>
  );
};

export default PasswordInput;
