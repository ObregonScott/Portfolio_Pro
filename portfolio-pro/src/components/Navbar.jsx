import React from 'react';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { GoMail } from "react-icons/go";
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/vulture.png';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4  bg-black  text-gray-200'>
            <div>
                <img src={Logo} alt="Logo Image" style={{ height: '190px' }} />
            </div>

            {/*Menu*/}

            <ul className='hidden md:flex'>
                <li className='text-xl'>Home</li>
                <li className='text-xl'>About</li>
                <li className='text-xl'>Skills</li>
                <li className='text-xl'>Projects</li>
                <li className='text-xl'>Contact</li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#011307] flex flex-col justify-center items-center'} >
                <li className='py-6 text-3xl text-[#cbe58e]'>Home</li>
                <li className='py-6 text-3xl text-[#cbe58e]'>About</li>
                <li className='py-6 text-3xl text-[#cbe58e]'>Skills</li>
                <li className='py-6 text-3xl text-[#cbe58e]'>Projects</li>
                <li className='py-6 text-3xl text-[#cbe58e]'>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar