/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";
import cn from "classnames";
import InputLabel from "../../../components/input-label/input-label";
import EmailInput from "../../../components/email-input/email-input";
import InputErrorText from "../../../components/input-error-text/input-error-text";
import style from "./email-fieldset-forgot-password.module.css";

function EmailFieldsetForgotPassword({
  register,
  dirtyFields,
  errors,
  classNameSuccess,
  classNameFalse,
}) {
  return (
    <fieldset className={cn(style.fieldset, style.container__email)}>
      <InputLabel htmlFor="email">
        Электронная почта
      </InputLabel>
      <EmailInput
        placeholder="Email"
        register={register}
        className={style.input}
        errorClassName={
          !dirtyFields.email
            ? undefined
            : errors.email
            ? classNameFalse
            : classNameSuccess
        }
        htmlFor="email"
      />
      {errors.email && <InputErrorText>{errors.email.message}</InputErrorText>}
    </fieldset>
  );
}

EmailFieldsetForgotPassword.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
  dirtyFields: PropTypes.object,
  classNameSuccess: PropTypes.string,
  classNameFalse: PropTypes.string,
};

export default EmailFieldsetForgotPassword;
