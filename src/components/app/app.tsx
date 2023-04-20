import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '../../router/router';
import token from '~/utils/token';

function App() {
  useEffect(() => {
    if (token.getToken('accessToken')) {
      console.log('Токен есть');
    } else {
      console.log('Токена нет');
    }
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
