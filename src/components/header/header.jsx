import { NavLink } from "react-router-dom";
import style from "./header.module.css";
import Logo from "../logo/logo";
import Button from "../button/button";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.nav_wrapper}>
          <NavLink className={style.link} to="/">
            <Button className={style.nav_button}>О нас</Button>
          </NavLink>
          <NavLink className={style.link} to="/">
            <Button className={style.nav_button}>Проекты</Button>
          </NavLink>
        </div>
        <div className={style.logo_wrapper}>
          <Logo />
        </div>
        <NavLink className={style.link} to="/authentication">
          <Button className={style.nav_button}>Войти</Button>
        </NavLink>
      </div>
    </header>
  );
}
