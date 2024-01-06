import { BrowserRouter } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './main.css';
import React from 'react';
import Layout from '@common-components/layout/layout';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <Layout className="light text-foreground bg-background h-full w-full">
          <App />
        </Layout>
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
