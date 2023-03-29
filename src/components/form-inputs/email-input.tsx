import React, { FC } from 'react';
import { useController } from 'react-hook-form';
import style from './inputs.module.css';
import cn from 'classnames';
import { Input, InputMessage } from '../UI';

const EmailInput: FC<any> = ({ control, name, placeholder = 'Email', pattern }) => {
  const {
    field,
    fieldState: { invalid, isDirty },
    formState: { errors },
  } = useController({
    control,
    name,
    rules: {
      required: 'Заполни меня',
      pattern: pattern,
    },
  });

  return (
    <div>
      <Input
        type={name}
        placeholder={placeholder}
        field={field}
        className={cn(
          invalid ? style.validation_false : isDirty ? style.validation_success : undefined,
        )}
      />
      {errors[name]?.message && <InputMessage type="error" message={errors[name]?.message} />}
    </div>
  );
};

export default EmailInput;
