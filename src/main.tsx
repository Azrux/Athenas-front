import { BrowserRouter } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './main.css';
import React from 'react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
