import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	Image,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from '@nextui-org/react';
import type { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AthenasLogo from '@assets/athenas_logo.png';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const NavBar: FC = () => {
    const navigate = useNavigate();

	return (
		<Navbar
            isBordered
			isBlurred
			shouldHideOnScroll
		>
            <NavbarContent justify="start">
                <NavbarBrand>
                    <Image src={AthenasLogo} width={75} />
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden mr-2 sm:flex gap-3">
                <NavbarItem className='transition hover:translate-y-1'>
                    <Link to='/home'>Home</Link>
                </NavbarItem>
                <NavbarItem className='transition mr-2 hover:translate-y-1'>
                    <Link to='/tienda'>Tienda</Link>
                </NavbarItem>
                <NavbarItem className='transition hover:translate-y-1'>
                    <Link to='/about'>Nosotros</Link>
                </NavbarItem>
            </NavbarContent>

            {/* Mobile */}
            <NavbarContent className="flex sm:hidden">
                <Dropdown>
                <NavbarItem>
                    <DropdownTrigger>
                        <Button className='flex bg-transparent hover:translate-y-1'>
                            Menu 
                            <ChevronDownIcon className="w-4" />
                        </Button>
                    </DropdownTrigger>
                </NavbarItem>
                <DropdownMenu aria-label="Menu">
                    <DropdownItem textValue='Home'>
                        <Button className='w-full bg-transparent' onClick={() => navigate('/home')}>
                            Home
                        </Button>
                    </DropdownItem>
                    <DropdownItem textValue='Tienda'>
                        <Button className='w-full bg-transparent' onClick={() => navigate('/tienda')}>
                            Tienda
                        </Button>
                    </DropdownItem>
                    <DropdownItem textValue='Sobre Nosotros'>
                        <Button className='w-full bg-transparent' onClick={() => navigate('/sobre-nosotros')}>
                            Sobre Nosotros
                        </Button>
                    </DropdownItem>
                </DropdownMenu>
                </Dropdown>
            </NavbarContent>

            {/* TODO: Agregar botones para el login con lógica de auth0 */}
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button>Ingresar</Button>
                </NavbarItem>
            </NavbarContent>
		</Navbar>
	);
};

export default NavBar;