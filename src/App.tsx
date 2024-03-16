import { Route, Routes } from 'react-router';
import Landing from '@pages/landing';
import type { FC } from 'react';
import Test from '@components/test';

const App: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Landing />} />
			<Route path='/test' element={<Test />} />
		</Routes>
	);
};

export default App
