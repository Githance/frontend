import { useState } from "react";
import Form from "../form/form";
import Fieldset from "../fieldset/fieldset";
import style from "./registration-page.module.css";

function RegistrationPage() {
  const [showPassword, setShowPassword] = useState(true);

  function togglePassword() {
    setShowPassword((prevValue) => !prevValue);
  }

  return (
    <div className={style.container}>
      <Form>
        <Fieldset
          type="text"
          required="required"
          label="Имя пользователя"
          name="user"
        />
        <Fieldset
          type="email"
          required="required"
          label="Электронная почта"
          name="email"
          className={style.input}
        />
        <Fieldset
          type={showPassword ? "password" : "text"}
          required="required"
          label="Пароль"
          name="password"
          className={style.input}
          togglePassword={() => togglePassword()}
          showPassword={showPassword}
          button
          hint
          hintText="Минимум 8 символов, должен включать цифры и буквы"
        />
      </Form>
    </div>
  );
}

export default RegistrationPage;
