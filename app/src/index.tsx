import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './i18n'; // Importez le fichier de configuration i18n si nécessaire

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);