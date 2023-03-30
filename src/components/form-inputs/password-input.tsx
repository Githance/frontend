import { FC, useState } from 'react';
import { useController } from 'react-hook-form';
import style from './inputs.module.css';
import cn from 'classnames';
import { InputForm, InputMessage } from '../UI';
import { RequireValidationScheme } from '../../utils/validation-scheme';

const PasswordInput: FC<any> = ({
  control,
  name,
  placeholder = 'Password',
  isLogginPage,
  validation = RequireValidationScheme,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    field,
    fieldState: { invalid, isDirty },
    formState: { errors },
  } = useController({
    control,
    name,
    rules: validation,
  });

  return (
    <div>
      <div className={style.container}>
        <InputForm
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
      {errors[name]?.message ? (
        <InputMessage type="error" message={errors[name]?.message} />
      ) : isLogginPage ? undefined : (
        <InputMessage type="warning" message="Минимум 8 символов, должен включать цифры и буквы" />
      )}
    </div>
  );
};

export default PasswordInput;
