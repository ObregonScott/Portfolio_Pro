import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/vulture.png';


const Navbar = () => {
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4  bg-[#011307]  text-gray-300'>
            <div>
                <img src={Logo} alt="Logo Image" style={{ width: '200px' }} />
            </div>

            {/*Menu*/}
            <div >
                <ul className='flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
            {/* Hamburger */}
            <div className='hidden'>
                <FaBars />
            </div>
            {/* Mobile Menu */}
            <ul className='hidden'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            {/* Social Icons */}
            <div className='hidden'>

            </div>

        </div>
    )
}

export default Navbar