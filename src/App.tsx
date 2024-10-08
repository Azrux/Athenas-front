import { Route, Routes } from "react-router";
import Landing from "@pages/landing";
import type { FC } from "react";
import Home from "@pages/home";

const App: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="/home" element={<Home />} />
		</Routes>
	);
};

export default App;
