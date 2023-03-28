import React, { FC } from 'react';
import { useController } from 'react-hook-form';
import style from './inputs.module.css';
import cn from 'classnames';
import { Input, InputMessage } from '../UI';

const EmailInput: FC<any> = ({ control, name, placeholder = 'Email' }) => {
  const {
    field,
    fieldState,
    formState: { errors, dirtyFields, isValid },
  } = useController({
    control,
    name,
    rules: {
      required: 'Заполни меня',
      /* pattern: {
        value: /^\w+([.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        message: 'Введите корректный адрес почты',
      }, */
    },
  });
  console.log(errors);
  return (
    <div>
      <Input
        type="email"
        placeholder={placeholder}
        field={field}
        className={cn(
          fieldState.invalid ? style.input_validation_false : style.input_validation_success,
        )}
      />
      {errors?.email?.message && <InputMessage type="error" message={errors?.email?.message} />}
    </div>
  );
};

export default EmailInput;
