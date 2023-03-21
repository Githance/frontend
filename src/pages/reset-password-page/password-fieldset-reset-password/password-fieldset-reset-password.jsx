/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import cn from 'classnames';
import InputLabel from '../../../components/input-label/input-label';
import InputText from '../../../components/input-text/input-text';
import PasswordInput from '../../../components/password-input/password-input';
import InputErrorText from '../../../components/input-error-text/input-error-text';
import { registrationPageScheme } from '../../../utils/validation-scheme';
import style from './password-fieldset-reset-password.module.css';

function PasswordFieldsetResetPassword({
  register,
  dirtyFields,
  errors,
  classNameSuccess,
  classNameFalse,
}) {
  return (
    <fieldset className={cn(style.fieldset, style.container__password)}>
      <InputLabel htmlFor="new_password2">Введите новый пароль</InputLabel>
      <PasswordInput
        placeholder="Password"
        register={register}
        className={style.input}
        errorClassName={
          !dirtyFields.new_password2
            ? undefined
            : errors.new_password2
            ? classNameFalse
            : classNameSuccess
        }
        htmlFor="new_password2"
        {...registrationPageScheme.password}
      />
      {errors.new_password2 ? (
        <InputErrorText>{errors.new_password2.message}</InputErrorText>
      ) : (
        <InputText>Минимум 8 символов, должен включать цифры и буквы</InputText>
      )}
    </fieldset>
  );
}

PasswordFieldsetResetPassword.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
  dirtyFields: PropTypes.object,
  classNameSuccess: PropTypes.string,
  classNameFalse: PropTypes.string,
};

export default PasswordFieldsetResetPassword;
