import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Logo, NotificationIcon, ProfileIcon } from "../UI";
import style from "./header.module.css";

const Header: FC = () => {
  return (
    <header className={style.header}>
      <nav className={style.nav_wrapper}>
        <div className={style.nav_main}>
          <NavLink className={`${style.link} pr-6`} to="/">
            <Logo />
          </NavLink>
          <NavLink className={style.link} to="/">
            Мои проекты
          </NavLink>
          <NavLink className={style.link} to="/">
            Мои заявки
          </NavLink>
        </div>
        <div className={style.nav_profile}>
          <NavLink className={style.profile_link} to="/">
            <ProfileIcon type="default" />
            Уведомления
          </NavLink>
          <NavLink className={style.profile_link} to="/auth">
            <NotificationIcon type="default" />
            Профиль
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
export default Header;