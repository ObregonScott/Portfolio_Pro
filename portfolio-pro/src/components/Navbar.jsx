import React from 'react';
import {useState, useEffect} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/vulture.png';

const Navbar = () => {
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4  bg-[#011307]  text-gray-300'>
            <div>
                <img src={Logo} alt="Logo Image" style={{ width: '200px' }} />
            </div>

            {/*Menu*/}
           
                <ul className='hidden md:flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
        
            {/* Hamburger */}
            <div className='md:hidden z-10'>
                <FaBars />
            </div>
            {/* Mobile Menu */}
            <ul className='hidden absolute top-0 left-0 w-full h-screen bg-[#011307] flex flex-col justify-center items-center'>
                <li className='py-6 text-2xl'>Home</li>
                <li className='py-6 text-2xl'>About</li>
                <li className='py-6 text-2xl'>Skills</li>
                <li className='py-6 text-2xl'>Projects</li>
                <li className='py-6 text-2xl'>Contact</li>
            </ul>
            {/* Social Icons */}
            <div className='hidden'>

            </div>

        </div>
    )
}

export default Navbar