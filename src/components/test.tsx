import ProductCard from '@common-components/product-card/product-card';
import AthenasLogo from '@assets/athenas_logo.png';
import { type FC } from 'react';

const Test: FC = () => {
	return (
		<ProductCard
			title='Athenas'
			description='Athenas Club'
			price='$5000'
			image={AthenasLogo}
			favorite={true}
		/>
	);
};

export default Test;
