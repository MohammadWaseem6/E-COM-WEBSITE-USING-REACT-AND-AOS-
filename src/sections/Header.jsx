import { Link } from 'react-scroll';
import { FaRegHeart, FaTimes, FaBars } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { IoPersonAddOutline, IoSearch } from 'react-icons/io5';
import { useDarkMode } from '../components/DarkModeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import sitelogo from '../assets/assets/clients/sitelogo.svg';

function Header() {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 800,
            easing: 'ease-in-sine',
            delay: 100
        });
    }, []);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { darkMode, toggleDarkMode } = useDarkMode();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navItems = [
        { link: 'Home', path: 'hero' },
        { link: 'Collections', path: 'collections' },
        { link: 'Products', path: 'products' },
        { link: 'Blogs', path: 'blogs' },
        { link: 'Contact', path: 'contact' }
    ];

    return (
        <nav className={`${darkMode ? 'dark bg-black' : 'light bg-white'} w-full flex lg:flex-col flex-row justify-between items-center gap-4 lg:px-20 px-6 lg:py-1 lg:static sticky top-0 z-[999]`}>
            <div id='top' className='relative w-full  flex justify-end items-center'>
                <img
                    data-aos='zoom-in'
                    src={sitelogo}
                    alt='site logo'
                    className={`lg:w-[400px] lg:h-[200px] h-[100px] ${darkMode ? 'dark:filter dark:invert' : ''} mx-auto`}
                />
                <div data-aos='zoom-in' id='header-icons' className='lg:flex hidden justify-center items-center gap-8 top-24 right-0 text-white '>
                    <IoSearch className='w-[25px] h-[25px] text-black transform hover:scale-125 transition-transform duration-300 cursor-pointer' />
                    <IoPersonAddOutline className='w-[25px] h-[25px] text-black transform hover:scale-125 transition-transform duration-300 cursor-pointer' />
                    <FaRegHeart className='w-[25px] h-[25px] text-black transform hover:scale-125 transition-transform duration-300 cursor-pointer' />
                    <div className='relative'>
                        <FiShoppingCart className='w-[25px] h-[25px] text-black transform hover:scale-125 transition-transform duration-300 cursor-pointer' />
                        <div className={`bg-black dark:bg-white dark:text-black text-white w-6 h-6 flex justify-center items-center rounded-full absolute top-[-25px] left-[20px] font-semibold`}>2</div>
                    </div>
                </div>
            </div>
            <div data-aos='zoom-in' id='menu section' className='w-full pb-5 flex lg:justify-center justify-end items-center sticky top-0 left-0 h-fit '>
                <ul className='lg:flex justify-center items-center gap-10 hidden'>
                    {navItems.map(({ link, path }) => (
                        <Link
                            key={path}
                            className={`uppercase font-semibold cursor-pointer p-3 rounded-lg text-black transition duration-300 bg-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white hover:bg-black hover:text-white ${darkMode ? 'text-white' : ''}`}
                            to={path}
                            spy={true}
                            offset={-100}
                            smooth={true}
                            onClick={closeMenu}
                        >
                            {link}
                        </Link>
                    ))}
                </ul>
                <div className='flex justify-center items-center lg:hidden mt-5' onClick={toggleMenu}>
                    <div>{isMenuOpen ?
                        <FaTimes className='text-black text-3xl dark:text-white cursor-pointer hover:text-gray-500 dark:hover:text-gray-400' /> :
                        <FaBars className='text-black text-3xl dark:text-white cursor-pointer hover:text-gray-500 dark:hover:text-gray-400' />
                    }</div>
                </div>
                <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0`}>
                    <ul className='flex flex-col justify-center items-center gap-2 w-full'>
                        {navItems.map(({ link, path }) => (
                            <Link key={path} className='text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-yellow-500 hover:text-black w-full text-center transition duration-300' to={path} spy={true} offset={-100} smooth={true} onClick={closeMenu}>
                                {link}
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
