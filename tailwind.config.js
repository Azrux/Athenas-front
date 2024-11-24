/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

export default {
	content: [
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.{js,ts,jsx,tsx}",
		"node_modules/daisyui/dist/**/*.js",
		"node_modules/react-daisyui/dist/**/*.js",
	],
	theme: {},
	darkMode: "class",
	plugins: [
		nextui({
			themes: {
				light: {
					colors: {
						background: {
							default: "#ece4f3ff",
							primary: "#ffffff",
							secondary: "#8958b1",
						},
						default: "##333333",
						primary: "#7d20c9",
						secondary: "#e5e5e5d0",
					},
				},
				dark: {
					colors: {
						background: {
							default: "#1f1f1f",
							primary: "#150227",
							secondary: "#220b36",
						},
						default: "#e5e5e5d0",
						primary: "#9b9898",
						secondary: "#a958eb",
					},
				},
			},
		}),
		require("daisyui"),
	],
};
