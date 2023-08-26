import { FC } from 'react';
import { Button as NextButton } from '@nextui-org/react';
import { MyButtonProps } from './types';

const Button: FC<MyButtonProps> = ({ children, userName, ...props }) => {
	return (
		<NextButton color='danger' {...props}>
			{children}
			{userName}
		</NextButton>
	);
};

export default Button;
