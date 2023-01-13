import Form from "../form/form";
import Fieldset from "../fieldset/fieldset";
import style from "./registration-page.module.css";

function RegistrationPage() {
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
        />
      </Form>
    </div>
  );
}

export default RegistrationPage;
