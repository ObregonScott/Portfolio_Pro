import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p classname='text-4xl font-bold inline border-b-4 border-gray-300'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Scott, nice to meet you. Please take a alook around.</p>
          </div>
          <div>
            <p>
            I have been playing Classical/Flamenco guitar for 25+ years, 
            and have been teaching guitar for 10 years. Aside from music, I spent a number of 
            years working on Pre-1972 Hot Rods and Motorcyles around the U.S. I hope to use my web development 
            and Engineering skills in the automotive industry, developing front end user software in electric vehicles.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About