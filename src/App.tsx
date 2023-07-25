import { Route, Routes } from 'react-router';
import Landing from '@pages/landing';
import { type FC } from 'react';

const App: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Landing />} />
		</Routes>
	);
};

export default App
