import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Provider } from 'react-redux/es/exports';
import store from './state/store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);