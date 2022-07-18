import React from 'react';
import background from '../assets/desert.jpg';
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#011307]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-gray-200 font-bold'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Scott Obregon</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Web Developer.</h2>
        <p className='text-white py-4 max-w-[700px]'>I am a Austin, Texas based Engineering Student
          with a background in welding and metal fabrication.
          Currently I am pursuing a career in Web Development and Software Design through The University of Texas.</p>
        <div>
          <button className='text-white border-2 rounded-full px-6 py-3 my-2 flex items-center
          hover:bg-violet-600 hover:border-pink-400'>
            View Work
            <span className='hover:rotate-90 duration-300'>
              <IoIosArrowForward className='ml-3' />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home