/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/self-closing-comp */
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import cn from "classnames";
import Form from "../../components/form/form";
import FormTitle from "../../components/form-title/form-title";
import TextFieldsetRegister from "./text-fieldset-register/text-fieldset-register";
import EmailFieldsetRegister from "./email-fieldset-register/email-fieldset-register";
import PasswordFieldsetRegister from "./password-fieldset-register/password-fieldset-register";
import AgreementRegister from "./agreement-register/agreement-register";
import ButtonFieldsetRegister from "./button-fieldset-register/button-fieldset-register";
import Button from "../../components/button/button";
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
      <div className={style.content}>
        <FormTitle className={style.title}>Регистрация</FormTitle>
        <Form handleSubmit={handleSubmit} onSubmit={onSubmit}>
          <TextFieldsetRegister
            register={register}
            dirtyFields={dirtyFields}
            errors={errors}
            classNameFalse={style.input_validation_false}
            classNameSuccess={style.input_validation_success}
          />
          <EmailFieldsetRegister
            register={register}
            dirtyFields={dirtyFields}
            errors={errors}
            classNameFalse={style.input_validation_false}
            classNameSuccess={style.input_validation_success}
          />
          <PasswordFieldsetRegister
            register={register}
            dirtyFields={dirtyFields}
            errors={errors}
            classNameFalse={style.input_validation_false}
            classNameSuccess={style.input_validation_success}
          />
          <AgreementRegister register={register} />
          <ButtonFieldsetRegister isValid={isValid} />
        </Form>
        <Button
          isValid
          className={cn(style.button, style.button__google)}
          type="button"
        >
          <span className={style.icon}></span>
          Войти через Google
        </Button>
        <div className={style.container__text}>
          <p className={style.text}>Уже зарегистрированы? </p>
          <Link className={style.link} to="/auth">
            Войти
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
