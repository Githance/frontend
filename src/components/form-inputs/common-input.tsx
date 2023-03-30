import { FC } from 'react';
import { useController } from 'react-hook-form';
import style from './inputs.module.css';
import cn from 'classnames';
import { InputForm, InputMessage } from '../UI';
import { RequireValidationScheme } from '../../utils/validation-scheme';

const CommonInput: FC<any> = ({
  control,
  name,
  placeholder = 'Email',
  validation = RequireValidationScheme,
}) => {
  const inputType = name === 'email' ? 'email' : 'text';
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
      <InputForm
        type={inputType}
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
