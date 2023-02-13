import { NavLink } from "react-router-dom";
import style from "./header.module.css";
import Logo from "../logo/logo";
import HeaderBtn from "./header-btn/header-btn";


export default function Header() {
  return (
    <header className={style.header}>
<div className={style.container}>
  <div className={style.nav_wrapper}>
<NavLink className={style.button} to="/"><HeaderBtn text='О нас'/></NavLink>
<NavLink className={style.button} to="/"><HeaderBtn text='Проекты'/></NavLink>
</div>
<div className={style.logo_wrapper}>
<Logo/>
</div>
        <NavLink className={style.button} to="/authentication">
        <HeaderBtn text='Войти'/>
        </NavLink>
        
        
      </div>
    </header>
  );
}


