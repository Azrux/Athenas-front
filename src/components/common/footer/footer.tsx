import { Image } from '@nextui-org/react';
import { type FC } from 'react';
import { Link } from 'react-router-dom';
import AthenasLogo from '@assets/athenas_logo.png';
import FacebookLogo from '@assets/facebook_icon.png';
import InstagramLogo from '@assets/instagram_icon.webp';
import YoutubeLogo from '@assets/youtube_icon.png';


const Footer: FC = () => {
	return (
		<div className='flex flex-col sm:flex-row justify-around items-center bg-default-50 fixed bottom-0 w-full border-t-1 border-default'>
            <Image src={AthenasLogo} width={60} />
			<nav>
				<div className='flex space-x-4 pt-2 pb-4 sm:py-0'>
					<Link to='/home'>Home</Link>
					<Link to='/about'>About</Link>
					<Link to='/tienda'>Tienda</Link>
				</div>
			</nav>
            <div className='flex items-center space-x-4 pb-2 sm:pb-0'>
                <Link to="https://www.facebook.com" target="_blank">
                    <Image src={FacebookLogo} width={30} />
                </Link>
                <Link to="https://www.instagram.com" target="_blank">
                    <Image src={InstagramLogo} width={30} />
                </Link>
                <Link to="https://www.youtube.com" target="_blank">
                    <Image src={YoutubeLogo} width={30} />
                </Link>
            </div>
		</div>
	);
};

export default Footer;
