import type { FC } from 'react';
import { Footer } from '@common-components/footer';
import { NavBar } from '@common-components/navbar';
import type { LayoutProps } from './types';

const Layout: FC<LayoutProps> = ({ children, ...props }) => {
	return (
		<main {...props}>
			<NavBar />
			  <div className='p-4'>{children}</div>
			<Footer />
		</main>
	);
};

export default Layout;