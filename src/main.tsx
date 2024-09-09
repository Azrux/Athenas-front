import Layout from "@components/layout/index.tsx";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./main.css";

const root = document.getElementById("root");

if (!root) throw new Error("Root element not found");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <Layout className="light text-foreground bg-background h-full w-full">
          <App />
        </Layout>
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>
);
