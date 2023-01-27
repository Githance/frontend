/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import { useForm } from "react-hook-form";
import { useState } from "react";
import cn from "classnames";
import Form from "../../components/form/form";
import FormTitle from "../../components/form-title/form-title";
import InputLabel from "../../components/input-label/input-label";
import TextInput from "../../components/text-input/text-input";
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
          <TextInput type="email" htmlFor="email" />
        </fieldset>
      </Form>
    </div>
  );
}

export default AuthenticationPage;
