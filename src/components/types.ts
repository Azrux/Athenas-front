import { ButtonProps } from '@nextui-org/react';

export interface MyButtonProps extends ButtonProps {
	userName: string;
}

export type ChangeType = {
	e: React.ChangeEvent<HTMLInputElement>;
};