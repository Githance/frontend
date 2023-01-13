import Form from "../form/form";
import Fieldset from "../fieldset/fieldset";
import style from "./authentication-page.module.css";

function AuthenticationPage() {
  return (
    <div className={style.container}>
      <Form>
        <Fieldset
          type="text"
          required="required"
          label="Электронная почта"
          name="email"          
        />
      </Form>
    </div>
  );
}

export default AuthenticationPage;
