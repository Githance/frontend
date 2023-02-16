/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";
import cn from "classnames";
import InputLabel from "../../../components/input-label/input-label";
import InputText from "../../../components/input-text/input-text";
import PasswordInput from "../../../components/password-input/password-input";
import InputErrorText from "../../../components/input-error-text/input-error-text";
import { registrationPageScheme } from "../../../utils/validation-scheme";
import style from "./password-fieldset-register.module.css";

function PasswordFieldsetRegister({
  register,
  dirtyFields,
  errors,
  classNameSuccess,
  classNameFalse,
}) {
  return (
    <fieldset className={cn(style.fieldset, style.container__password)}>
      <InputLabel htmlFor="password1" required>
        Пароль
      </InputLabel>
      <PasswordInput
        placeholder="Password"
        register={register}
        className={style.input}
        errorClassName={
          !dirtyFields.password1
            ? undefined
            : errors.password1
            ? classNameFalse
            : classNameSuccess
        }
        htmlFor="password1"
        {...registrationPageScheme.password}
      />
      {errors.password1 ? (
        <InputErrorText>{errors.password1.message}</InputErrorText>
      ) : (
        <InputText>Минимум 8 символов, должен включать цифры и буквы</InputText>
      )}
    </fieldset>
  );
}

PasswordFieldsetRegister.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
  dirtyFields: PropTypes.object,
  classNameSuccess: PropTypes.string,
  classNameFalse: PropTypes.string,
};

export default PasswordFieldsetRegister;
