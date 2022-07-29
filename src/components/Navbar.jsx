// Imports
import React from 'react';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll'

// import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/vulture.png';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4  bg-gradient-to-r from-black to-gray-700  text-amber-400'>
            <div>
                <img src={Logo} alt="" style={{ height: '190px' }} />
            </div>

            {/*Menu*/}

            <ul className='hidden md:flex'>
                <li className='text-xl hover:shadow-yellow-300 hover:scale-110 duration-500'>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='text-xl hover:shadow-yellow-300 hover:scale-110 duration-500'>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='text-xl hover:shadow-yellow-300 hover:scale-110 duration-500'>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='text-xl hover:shadow-yellow-300 hover:scale-110 duration-500'>
                    <Link to="projects" smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className='text-xl hover:shadow-yellow-300 hover:scale-110 duration-500'>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-zinc-500 flex flex-col justify-center items-center'} >
                <li className='py-6 text-4xl text-amber-500'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl text-amber-500'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl text-amber-500'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl text-amber-500'>
                    <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className='py-6 text-4xl text-amber-500'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar