import { FC } from 'react';
import { DevCard } from './dev-card';

const Test: FC = () => {
	return (
		<>
			<DevCard
				profileImg={'https://avatars.githubusercontent.com/u/69043210?v=4'}
				name={'Juan'}
				location={'Colombia'}
				about={'I am a developer'}
			/>
		</>
	);
};

export default Test;
