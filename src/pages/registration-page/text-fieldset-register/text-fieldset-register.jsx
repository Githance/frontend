/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";
import InputLabel from "../../../components/input-label/input-label";
import TextInput from "../../../components/text-input/text-input";
import InputErrorText from "../../../components/input-error-text/input-error-text";
import style from "./text-fieldset-register.module.css";

function TextFieldsetRegister({
  register,
  dirtyFields,
  errors,
  classNameSuccess,
  classNameFalse,
}) {
  return (
    <fieldset className={style.fieldset}>
      <InputLabel htmlFor="name" required>
        Имя пользователя
      </InputLabel>
      <TextInput
      placeholder="Jack Sparrow"
        register={register}
        className={style.input}
        errorClassName={
          !dirtyFields.name
            ? undefined
            : errors.name
            ? classNameFalse
            : classNameSuccess
        }
        htmlFor="name"        
      />
      {errors.name && <InputErrorText>{errors.name.message}</InputErrorText>}
    </fieldset>
  );
}

TextFieldsetRegister.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
  dirtyFields: PropTypes.object,
  classNameSuccess: PropTypes.string,
  classNameFalse: PropTypes.string,
};

export default TextFieldsetRegister;
