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
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4  bg-[#011307]  text-gray-300'>
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
            {/* Social Icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-white'
                        href="">
                            Linkedin<FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800'>
                        <a className='flex justify-between items-center w-full text-gray-200'
                        href="">
                            Github<FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-500'>
                        <a className='flex justify-between items-center w-full text-white'
                        href="">
                            Email<GoMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-orange-500 '>
                        <a className='flex justify-between items-center w-full text-white'
                        href="">
                            Resume<BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar