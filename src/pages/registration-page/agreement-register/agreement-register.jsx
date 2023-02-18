/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";
import CheckBox from "../../../components/checkbox/checkbox";
import style from "./agreement-register.module.css";

function AgreementRegister({ register }) {
  return (
    <div className={style.agreement}>
      <CheckBox register={register} />
      <p className={style.agreement__text}>
        Согласен с
        <a className={style.agreement__link} href="#">
          условиями пользования
        </a>
        платформой Githance и&nbsp;условиями обработки персональных данных на
        условиях, определенных
        <a className={style.agreement__link} href="#">
          Политикой конфиденциальности
        </a>
      </p>
    </div>
  );
}

AgreementRegister.propTypes = {
  register: PropTypes.func,
};

export default AgreementRegister;
