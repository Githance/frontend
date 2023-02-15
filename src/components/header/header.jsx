import { NavLink } from "react-router-dom";
import style from "./header.module.css";
import Logo from "../logo/logo";


export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.nav_wrapper}>
          <NavLink className={style.link} to="/">
            О нас
          </NavLink>
          <NavLink className={style.link} to="/">
           Проекты
          </NavLink>
        </div>
        <div className={style.logo_wrapper}>
          <Logo />
        </div>
        <NavLink className={style.link} to="/auth">
          Войти
        </NavLink>
      </div>
    </header>
  );
}
