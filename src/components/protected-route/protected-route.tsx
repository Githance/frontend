import { FC, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from '~/services/hooks';
import style from './protected-route.module.css';
import { PATH } from '~/utils/variables';
import { getIsAuthCheck, getIsAuth } from '~/services/selectors';

import Loader from '../UI/loader/loader';

export type Props = {
  element: ReactNode;
  onlyUnAuth?: boolean;
};

const ProtectedRoute: FC<Props> = ({ onlyUnAuth = false, element }) => {
  const location = useLocation();
  const isAuth = useSelector(getIsAuth);
  const isAuthCheck = useSelector(getIsAuthCheck);

  if (!isAuthCheck) {
    return <Loader className={style.protectedRouteLoader} />;
  }

  if (onlyUnAuth && isAuth) {
    const fromPage = location.state?.from?.pathname || PATH.HOME;
    return <Navigate to={fromPage} replace state={{ from: location }} />;
  }

  if (!onlyUnAuth && !isAuth) {
    return <Navigate to={PATH.AUTH} replace state={{ from: location }} />;
  }

  return <>{element}</>;
};

export default ProtectedRoute;
