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
