/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";
import cn from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import InputLabel from "../../../components/input-label/input-label";
import InputText from "../../../components/input-text/input-text";
import PasswordInput from "../../../components/password-input/password-input";
import InputErrorText from "../../../components/input-error-text/input-error-text";
import { registrationPageScheme } from "../../../utils/validation-scheme";
import style from "./password-fieldset-register.module.css";
import { getRegisterError } from "../../../services/selectors/selectors";
import { setRegisterError } from "../../../services/slice/user-auth-slice";

function PasswordFieldsetRegister({
  register,
  dirtyFields,
  errors,
  classNameSuccess,
  classNameFalse,
}) {
  const serverErrors = useSelector(getRegisterError);
  const dispatch = useDispatch();

  return (
    <fieldset className={cn(style.fieldset, style.container__password)}>
      <InputLabel htmlFor="password" required>
        Пароль
      </InputLabel>
      <PasswordInput
        placeholder="Password"
        register={register}
        className={style.input}
        errorClassName={
          !dirtyFields.password
            ? undefined
            : errors.password
            ? classNameFalse
            : classNameSuccess
        }
        htmlFor="password"
        {...registrationPageScheme.password}
      />
      {errors.password ? (
        <InputErrorText>{errors.password.message}</InputErrorText>
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
