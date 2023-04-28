import { FC } from 'react';
import cn from 'classnames';
import { NavLink, useMatch } from 'react-router-dom';
import { useSelector } from '~/services/hooks';
import { Logo, NotificationIcon, ProfileIcon } from '../UI';
import style from './header.module.css';
import { PATH } from '~/utils/variables';
import { getIsAuth } from '~/services/selectors';

const Header: FC = () => {
  const profile = useMatch('profile');
  const isAuth = useSelector(getIsAuth);

  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <div className={style.nav__main}>
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
        <div className={style.nav__profile}>
          <NavLink className={cn(style.link, style.link_position_profile)} to="/">
            <NotificationIcon type="default" />
            Уведомления
          </NavLink>
          <NavLink
            className={cn(style.link, style.link_position_profile, profile && style.link_active)}
            to={PATH.PROFILE}
          >
            <ProfileIcon active={!!profile} />
            Профиль
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
export default Header;
