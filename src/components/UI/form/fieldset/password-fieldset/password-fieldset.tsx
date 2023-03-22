import { FC } from 'react';
import style from './password-fieldset.module.css';
import { Label, InputMessage } from '../../../index';
import { Link } from 'react-router-dom';
import PasswordInput from './password-input/password-input';

type Props = {
  register: any;
  errors?: any;
  dirtyFields?: any;
  classNameSuccess?: string;
  classNameFalse?: string;
  label?: string;
};

const PasswordFieldset: FC<Props> = ({
  register,
  dirtyFields,
  errors,
  classNameSuccess,
  classNameFalse,
  label = 'Пароль',
}) => {
  return (
    <fieldset className={style.fieldset}>
      <div className={style.container__password}>
        <Label htmlFor="password">{label}</Label>
        <Link className={style.link} to="password/reset">
          Забыли пароль?
        </Link>
      </div>
      <PasswordInput
        placeholder="Password"
        className={style.input}
        htmlFor="password"
        register={register}
        errorClassName={
          !dirtyFields.password ? undefined : errors.password ? classNameFalse : classNameSuccess
        }
      />
      {errors.password && <InputMessage type="error" message={errors.password.message} />}
    </fieldset>
  );
};

export default PasswordFieldset;
