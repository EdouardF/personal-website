import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);