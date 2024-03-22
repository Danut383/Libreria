// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // No es necesario especificar .tsx
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
