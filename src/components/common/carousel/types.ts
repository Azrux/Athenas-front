import type { CarouselProps as DaisyCarouselProps } from 'react-daisyui';

export interface CarouselProps extends Partial<DaisyCarouselProps> {
	images: string[];
	classNameCarousel?: string;
	classNameContainer?: string;
}
