/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/self-closing-comp */
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import cn from "classnames";
import Form from "../../components/form/form";
import FormTitle from "../../components/form-title/form-title";
import InputLabel from "../../components/input-label/input-label";
import EmailInput from "../../components/email-input/email-input";
import PasswordInput from "../../components/password-input/password-input";
import InputErrorText from "../../components/input-error-text/input-error-text";
import Button from "../../components/button/button";
import CheckBox from "../../components/checkbox/checkbox";
import style from "./registration-page.module.css";

function RegistrationPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: { user: "", email: "", password: "" },
  });

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
        <FormTitle className={style.title}>Регистрация</FormTitle>
        <fieldset className={style.fieldset}></fieldset>

        <div className={style.agreement}>
          <CheckBox register={register} />
          <p className={style.agreement__text}>
            Согласен с
            <a className={style.agreement__link} href="#">
              условиями пользования
            </a>
            платформой Githance и&nbsp;условиями обработки персональных данных
            на условиях, определенных
            <a className={style.agreement__link} href="#">
              Политикой конфиденциальности
            </a>
          </p>
        </div>
      </Form>
    </div>
  );
}

export default RegistrationPage;
