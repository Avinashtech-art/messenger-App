import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {console.log("app is not rendered")}
    <Provider  store={store}>
    <App />
    
    </Provider>
  </React.StrictMode>
);

;


  