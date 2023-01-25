/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import cn from "classnames";
import Form from "../../components/form/form";
import Title from "../../components/title/title";
import style from "./authentication-page.module.css";

function AuthenticationPage() {
  const [showPassword, setShowPassword] = useState(true);

  function togglePassword() {
    setShowPassword((prevValue) => !prevValue);
  }

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
        <Title className={style.title}>Вход</Title>
      </Form>
    </div>
  );
}

export default AuthenticationPage;
