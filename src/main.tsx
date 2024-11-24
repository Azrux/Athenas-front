import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import React from "react";
import Layout from "@components/layout/index.tsx";
import { ThemeProvider } from "next-themes";

const root = document.getElementById("root");

if (!root) throw new Error("Root element not found");

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<BrowserRouter>
			<NextUIProvider>
				<ThemeProvider defaultTheme="light">
					<Layout className="text-foreground bg-background-primary h-full w-full">
						<App />
					</Layout>
				</ThemeProvider>
			</NextUIProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
