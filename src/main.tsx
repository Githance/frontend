import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './services/index';
import App from './components/app/app';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
