/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Form from "../../components/form/form";
import FormTitle from "../../components/form-title/form-title";
import InputLabel from "../../components/input-label/input-label";
import EmailInput from "../../components/email-input/email-input";
import PasswordInput from "../../components/password-input/password-input";
import InputErrorText from "../../components/input-error-text/input-error-text";
import style from "./authentication-page.module.css";

function AuthenticationPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
  } = useForm({ mode: "onChange", defaultValues: { email: "", password: "" } });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className={style.container}>
      <Form
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        className={style.form}
      >
        <FormTitle className={style.title}>Вход</FormTitle>
        <fieldset className={style.fieldset}>
          <InputLabel
            label="Электронная почта"
            htmlFor="email"
            className={style.label}
            required
          ></InputLabel>
          <EmailInput className={style.input} htmlFor="email" />
          {false && (
            <InputErrorText className={style.error}>
              Validation text
            </InputErrorText>
          )}
        </fieldset>
        <fieldset className={style.fieldset}>
          <div className={style.container__password}>
            <InputLabel
              label="Пароль"
              htmlFor="password"
              className={style.label}
              required
            ></InputLabel>
            <Link className={style.link} to="/registration">
              Забыли пароль?
            </Link>
          </div>
          <PasswordInput className={style.input} htmlFor="password" />
          {false && (
            <InputErrorText className={style.error}>
              Validation text
            </InputErrorText>
          )}
        </fieldset>
      </Form>
    </div>
  );
}

export default AuthenticationPage;
