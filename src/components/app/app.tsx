import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '../../router/router';
import { checkUserAuth } from '~/services/slice/auth/user-slice';
import { useDispatch } from '~/services/hooks';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserAuth());
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
