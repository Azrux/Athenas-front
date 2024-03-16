import { BrowserRouter } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './main.css';
import React from 'react';
import Layout from '@common-components/layout/layout';

const root = document.getElementById('root')

if (!root) throw new Error('Root element not found')

ReactDOM.createRoot(root).render(
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
