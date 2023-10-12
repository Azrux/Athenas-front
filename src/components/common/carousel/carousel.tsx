import { type FC } from 'react';
import type { CarouselProps } from './types';
import { Carousel as DaisyCarousel } from 'react-daisyui';

const Carousel: FC<CarouselProps> = ({
	images,
	classNameContainer,
	classNameCarousel,
	...props
}) => {
	return (
		<div className={`${classNameContainer}`}>
			<DaisyCarousel
				display='sequential'
				className={`rounded-box ${classNameCarousel}`}
				{...props}
			>
				{images.map((image, index) => (
					<DaisyCarousel.Item
						src={image}
						alt={`carousel-image-${index}`}
						key={index}
					/>
				))}
			</DaisyCarousel>
		</div>
	);
};

export default Carousel;