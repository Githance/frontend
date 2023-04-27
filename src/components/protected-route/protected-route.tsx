import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from '~/services/hooks';
import { checkAuth } from '~/services/selectors';

interface IProtectedRoute {
  children: ReactNode;
  to: string;
}

const ProtectedRoute: FC<IProtectedRoute> = ({ children, to }) => {
  const isAuth = useSelector(checkAuth);
  return <>{!isAuth ? children : <Navigate to={to} replace />}</>;
};

export default ProtectedRoute;

/* const ProtectedRoute: FC<TProtectedRoute> = ({
  onlyUnAuth = false,
  element,
}) => {
  const location = useLocation();
  const isAuth = useAppSelector(getIsAuth);
  const isAuthCheck = useAppSelector(getIsAuthCheck);

  if (!isAuthCheck) {
    return <Loader classname="--loader-router" />;
  }

  if (onlyUnAuth && isAuth) {
    const fromPage = location.state?.from?.pathname || PATH.HOME;
    return <Navigate to={fromPage} replace state={{ from: location }} />;
  }

  if (!onlyUnAuth && !isAuth) {
    return <Navigate to={PATH.LOGIN} replace state={{ from: location }} />;
  }

  return <>{element}</>;
};
export type TProtectedRoute = {
  element: ReactNode;
  onlyUnAuth?: boolean;
} */
