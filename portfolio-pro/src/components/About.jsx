import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-5xl font-bold inline border-b-4 border-white'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi! I'm Scott, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className='text-white'>
              My greatest passions in life have been Music and Hotrods. I have been playing Classical/Flamenco guitar for 25+ years,
              and have been teaching guitar for 10 years. Currently I am seasonaly touring the United States with band Government Whiskey and have worked in
              various studios in central Texas as a session musician. Aside from music, I spent a number of
              years working on Pre-1972 Hot Rods and Motorcyles as a welder and metal fabricator. I hope to use my Web Development
              and Engineering skills in the automotive industry, developing front end user software in electric vehicles.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About