import AboutUs from "@pages/about";
import Home from "@pages/home";
import Landing from "@pages/landing";
import type { FC } from "react";
import { Route, Routes } from "react-router";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
};

export default App;
