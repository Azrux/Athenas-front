import { Image } from '@nextui-org/react';
import type { FC } from 'react';
import type { DevCardProps } from './types';

//Todo: Add Typography component when it's ready

const DevCard: FC<DevCardProps> = ({ profileImg, location, name, about }) => {	
	return (
		<div className='flex h-60 border-2 border-primary-500 bg-primary-50 rounded-lg m-4 p-4 overflow-auto'>
			<Image className='border-2 border-primary-200 w-48' src={profileImg} disableSkeleton={false} />
			<div className='pl-2 pb-2'>
				<p className='text-lg font-bold'>{name}</p>
				<p className='text-sm italic pb-2'>{location}</p>
				<p className='text-justify'>{about}</p>
			</div>
		</div>
	);
};

export default DevCard;
