/* eslint-disable no-nested-ternary */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";
import InputLabel from "../../../components/input-label/input-label";
import EmailInput from "../../../components/email-input/email-input";
import InputErrorText from "../../../components/input-error-text/input-error-text";
import style from "./email-fieldset-auth.module.css";

function EmailFieldsetAuth({
  register,
  dirtyFields,
  errors,
  classNameSuccess,
  classNameFalse,
}) {
  return (
    <fieldset className={style.fieldset}>
      <InputLabel htmlFor="email">Электронная почта</InputLabel>
      <EmailInput
        className={style.input}
        htmlFor="email"
        register={register}
        errorClassName={
          !dirtyFields.email
            ? undefined
            : errors.email
            ? classNameFalse
            : classNameSuccess
        }
      />
      {errors.email && <InputErrorText>{errors.email.message}</InputErrorText>}
    </fieldset>
  );
}

EmailFieldsetAuth.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
  dirtyFields: PropTypes.object,
  classNameSuccess: PropTypes.string,
  classNameFalse: PropTypes.string,
};

export default EmailFieldsetAuth;
