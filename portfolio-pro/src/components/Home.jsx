// Imports
import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import HeroImage from '../assets/HeroImage.jpg';
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home'
      className='h-screen w-full bg-gradient-to-b from-black via-gray-400 to-slate-300'>

      {/* Container */}
      <div className='max-w-screen-lg mx-auto flex flex-col 
      items-center justify-center h-full px-4 md:flex-row'>

        <div className='flex flex-col justify-center h-full'>
          <p className='text-gray-200 text-ellipsis'>Hi, my name is</p>
          <h1 className='text-black text-5xl text-bold text-shadow-sm shadow-amber-600'>Scott Obregon</h1>
          <h2 className='text-white text-4xl sm:7xl font-bold'>I'm a Full Stack Web Developer.</h2>
          <p className='text-white text-lg py-4 max-w-md'>I am a Austin, Texas based Engineering Student
            with a background in welding and metal fabrication.
            Currently I am pursuing a career in Web Development and Software Design through The University of Texas.</p>
          <button className='text-onyx w-fit rounded-2xl px-6 py-3 my-2 flex items-center
          bg-gradient-to-r from-yellow-300 to-amber-500 shadow-sm hover:shadow-cyan-300 shadow-white cursor-pointer group font-semibold'>
            <Link to="projects" smooth={true} duration={600}>
              Projects
            </Link>
            <span className='group-hover:rotate-90 duration-200'>
              <IoIosArrowForward size={15} className='ml-1' />
            </span>
          </button>
        </div>
        <div><img src={HeroImage} alt="Me playing guitar" className='rounded-2xl mx-auto w-2/3 md:full' /></div>
      </div>

    </div>
  )
}

export default Home