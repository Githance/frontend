import { FC } from 'react';
import { Label, InputMessage } from '../../../index';
import style from './email-fieldset.module.css';
import EmailInput from './email-input/email-input';
type Props = {
  register: any;
  errors?: any;
  dirtyFields?: any;
  classNameSuccess?: string;
  classNameFalse?: string;
};
const EmailFieldset: FC<Props> = ({
  register,
  dirtyFields,
  errors,
  classNameSuccess,
  classNameFalse,
}) => {
  return (
    <fieldset className={style.fieldset}>
      <Label htmlFor="email">Электронная почта</Label>
      <EmailInput
        placeholder="Email"
        className={style.input}
        htmlFor="email"
        register={register}
        errorClassName={
          !dirtyFields.email ? undefined : errors.email ? classNameFalse : classNameSuccess
        }
      />
      {errors.email && <InputMessage type="error" message={errors.email.message} />}
    </fieldset>
  );
};

export default EmailFieldset;
