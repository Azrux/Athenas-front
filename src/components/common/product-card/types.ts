import { type CardProps } from '@nextui-org/react';

export interface ProductCardProps extends CardProps {
	title: string;
	price: string;
	image: string;
	description: string;
	favorite: boolean;
}