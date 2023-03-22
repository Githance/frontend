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
  isLogginPage?: boolean;
  htmlFor: string;
};

const PasswordFieldset: FC<Props> = ({
  register,
  dirtyFields,
  errors,
  classNameSuccess,
  classNameFalse,
  label = 'Пароль',
  htmlFor,
  isLogginPage,
}) => {
  return (
    <fieldset className={style.fieldset}>
      <div className={style.container__password}>
        <Label htmlFor={htmlFor}>{label}</Label>
        {isLogginPage && (
          <Link className={style.link} to="password/reset">
            Забыли пароль?
          </Link>
        )}
      </div>
      <PasswordInput
        placeholder="Password"
        className={style.input}
        htmlFor={htmlFor}
        register={register}
        maxLength={{ value: 8, message: 'Минимум 8 символов' }}
        errorClassName={
          !dirtyFields.password1 ? undefined : errors.password1 ? classNameFalse : classNameSuccess
        }
      />
      {errors.password1 ? (
        <InputMessage type="error" message={errors.password1?.message} />
      ) : (
        !isLogginPage && (
          <InputMessage
            type="warning"
            message="Минимум 8 символов, должен включать цифры и буквы"
          />
        )
      )}
    </fieldset>
  );
};

export default PasswordFieldset;
