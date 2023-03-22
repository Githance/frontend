import { FC } from 'react';
import style from './text-fieldset.module.css';
import { Label, InputMessage } from '../../../index';
import TextInput from './text-input/text-input';
type Props = {
  register: any;
  errors?: any;
  dirtyFields?: any;
  classNameSuccess?: string;
  classNameFalse?: string;
  label?: string;
};
const TextFieldset: FC<Props> = ({
  register,
  dirtyFields,
  errors,
  classNameSuccess,
  classNameFalse,
  label = 'Имя пользователя',
}) => {
  return (
    <fieldset className={style.fieldset}>
      <Label htmlFor="name" required>
        {label}
      </Label>
      <TextInput
        placeholder="Jack Sparrow"
        register={register}
        className={style.input}
        errorClassName={
          !dirtyFields.name ? undefined : errors.name ? classNameFalse : classNameSuccess
        }
        htmlFor="name"
      />
      {errors.name && <InputMessage type="error" message={errors.name.message} />}
    </fieldset>
  );
};

export default TextFieldset;
