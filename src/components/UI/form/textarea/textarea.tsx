import { FC } from 'react';
import cn from 'classnames';
import { useController } from 'react-hook-form';
import style from './textarea.module.css';
import InputMessage from '../input-message/input-message';
import { RequireValidationScheme } from '~/utils/validation-scheme';

type Props = {
  control?: any;
  name: string;
  className?: string;
  minLength?: number;
  maxLength?: number;
  validation?: any;
  value?: string;
};

const Textarea: FC<Props> = ({
  control,
  name,
  className,
  validation = RequireValidationScheme,
  ...props
}) => {
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
    <>
      <textarea
        {...field}
        className={cn(
          className,
          invalid ? style.validation_false : isDirty ? style.validation_success : undefined,
          style.textarea,
        )}
        defaultValue={props.value}
        minLength={props.minLength}
        maxLength={props.maxLength}
      ></textarea>
      {errors[name]?.message && <InputMessage type="error" message={errors[name]?.message} />}
    </>
  );
};

export default Textarea;
