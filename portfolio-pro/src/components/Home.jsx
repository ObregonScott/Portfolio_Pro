import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import HeroImage from '../assets/HeroImage.jpg';

const Home = () => {
  return (
    <div name='home'
      className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>

      {/* Container */}
      <div className='max-w-screen-lg mx-auto flex flex-col 
      items-center justify-center h-full px-4 md:flex-row'>

        <div className='flex flex-col justify-center h-full'>
          <p className='text-gray-200'>Hi, my name is</p>
          <h1 className='text-[#ccd6f6] text-2xl'>Scott Obregon</h1>
          <h2 className='text-white text-4xl sm:7xl font-bold'>I'm a Full Stack Web Developer.</h2>
          <p className='text-white py-4 max-w-md'>I am a Austin, Texas based Engineering Student
            with a background in welding and metal fabrication.
            Currently I am pursuing a career in Web Development and Software Design through The University of Texas.</p>
          <button className='text-white w-fit border-2 rounded-2xl px-6 py-3 my-2 flex items-center
          bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer group'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <IoIosArrowForward size={20} className='ml-1'/>
            </span>
          </button>
        </div>
        <div><img src={HeroImage} alt="Me playing guitar" className='rounded-2xl mx-auto w-2/3 md:full' /></div>
      </div>

    </div>
  )
}

export default Home