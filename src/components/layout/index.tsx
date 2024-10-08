import type { FC } from "react";
import type { LayoutProps } from "./types";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

const Layout: FC<LayoutProps> = ({ children, ...props }) => {
	return (
		<main {...props}>
			<NavBar />
			<div className="pb-40 sm:pb-16 px-4">{children}</div>
			<Footer />
		</main>
	);
};

export default Layout;
