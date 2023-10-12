import Carousel from '@common-components/carousel/carousel';
import { FC } from 'react';

const Test: FC = () => {
	const images = [
		'https://st.depositphotos.com/1016440/2534/i/450/depositphotos_25344733-stock-photo-sunrise-at-the-beach.jpg',
		'https://media.istockphoto.com/id/1322104312/es/foto/libertad-cadenas-que-se-transforman-en-aves-concepto-de-carga.jpg?s=612x612&w=0&k=20&c=jwGtdxbTQRwdZrpfr0-cPcaV0gP8xk9muMyPKqmxKYU=',
		'https://img.freepik.com/foto-gratis/pintura-digital-montana-arbol-colorido-primer-plano_1340-25699.jpg',
	];

	return (
		<Carousel
			classNameContainer='w-[500px]'
			classNameCarousel='h-[300px]'
			images={images}
		/>
	);
};

export default Test;
