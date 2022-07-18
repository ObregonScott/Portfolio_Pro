import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#107e57]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#cbe58e]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-pink-500'>Scott Obregon</h1>
        <p className='text-[#cbe58e]'>I am an Austin, Texas based Engineering Student
          with a background in welding and metal fabrication.
          Currently I am pursuing a career in Web Development and Software Design through The University of Texas</p>
          <div> View my work <IoIosArrowForward/></div>
      </div>
    </div>
  )
}

export default Home