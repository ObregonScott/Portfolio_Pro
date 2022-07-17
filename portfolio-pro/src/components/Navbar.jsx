import React from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import Logo from '../assets/vulture.png';


const Navbar = () => {
    return (
        <div className='fixed w-full h-[80px] bg-[#011307] flex justify-between items-center px-4 text-gray-300'>
            <div>
                <img src={Logo} alt="Logo Image" style={{width:'200px'}} />
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar