import React, { FC } from 'react';
import style from './text-fieldset.module.css';
import { Label, TextInput, InputMessage } from '../../../index';
type Props = {
  register: any;
  errors?: any;
  dirtyFields?: any;
  classNameSuccess?: string;
  classNameFalse?: string;
};
const TextFieldset: FC<Props> = ({
  register,
  dirtyFields,
  errors,
  classNameSuccess,
  classNameFalse,
}) => {
  return (
    <fieldset className={style.fieldset}>
      <Label htmlFor="name" required>
        Имя пользователя
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
