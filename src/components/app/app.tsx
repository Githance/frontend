import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '../../router/router';
import { checkUserAuth } from '~/services/slice/auth/user-slice';
import { useDispatch } from '~/services/hooks';
import { Loader } from '~/components/UI/index';
import { useSelector } from '~/services/hooks';
import { getIsAuthCheck } from '~/services/selectors';

function App() {
  const dispatch = useDispatch();
  const isAuthCheck = useSelector(getIsAuthCheck);

  useEffect(() => {
    dispatch(checkUserAuth());
  }, []);

  return <>{!isAuthCheck ? <Loader /> : <RouterProvider router={router} />}</>;
}

export default App;
