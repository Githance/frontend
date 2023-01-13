import { NavLink } from "react-router-dom";
import style from "./header.module.css";

function Header() {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <NavLink className={style.button} to="/authentication">
          Войти
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
