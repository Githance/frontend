/* eslint-disable no-nested-ternary */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import InputLabel from "../../../components/input-label/input-label";
import PasswordInput from "../../../components/password-input/password-input";
import InputErrorText from "../../../components/input-error-text/input-error-text";
import style from "./password-fieldset-auth.module.css";

function PasswordFieldsetAuth({
  register,
  dirtyFields,
  errors,
  classNameSuccess,
  classNameFalse,
}) {
  return (
    <fieldset className={style.fieldset}>
      <div className={style.container__password}>
        <InputLabel htmlFor="password">Пароль</InputLabel>
        <Link className={style.link} to="registration">
          Забыли пароль?
        </Link>
      </div>
      <PasswordInput
        placeholder="Password"
        className={style.input}
        htmlFor="password"
        register={register}
        errorClassName={
          !dirtyFields.password
            ? undefined
            : errors.password
            ? classNameFalse
            : classNameSuccess
        }
      />
      {errors.password && (
        <InputErrorText>{errors.password.message}</InputErrorText>
      )}
    </fieldset>
  );
}

PasswordFieldsetAuth.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
  dirtyFields: PropTypes.object,
  classNameSuccess: PropTypes.string,
  classNameFalse: PropTypes.string,
};

export default PasswordFieldsetAuth;
