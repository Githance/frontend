import { FC } from 'react';
import { useController } from 'react-hook-form';
import style from './inputs.module.css';
import cn from 'classnames';
import { InputForm, InputMessage } from '../UI';

const CommonInput: FC<any> = ({ control, name, placeholder = 'Email', pattern }) => {
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
      <InputForm
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

export default CommonInput;
