// Imports
import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-slate-300
    via-slate-500 to-cyan-900 text-onyx'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-5xl text-white font-bold inline border-b-4 border-amber-400'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-3xl font-bold'>
            <p>Musician<span className='text-amber-400'>.</span></p>
            <p>Engineer<span className='text-amber-400'>.</span></p>
            <p>Student<span className='text-amber-400'>.</span></p>
          </div>
          <div>
            <p className='text-white'>
              My greatest passions in life have been playing <span className='text-bold text-lg'>Music</span>,<span className='text-bold text-lg'> Designing</span>, and<span className='text-bold text-lg'> Learning</span>.
            </p>
            <p className='text-white'>
              I have been playing Classical/Flamenco guitar for 25+ years,
              and have been teaching guitar for 10 years. Currently, I am touring the States with my band, <span className='text-lg'>Government Whiskey &trade;</span>. I have worked in
              various studios in central Texas as a session musician and audio engineer.
            </p>            
            <p className='text-white'>
                Aside from music, I spent a number of
                years working on Pre-1972 Hot Rods and Motorcyles. I designed, fabricated, restored, and customized things that go fast.
              </p>
              <p className='text-white'>
              I like to go <span className='text-bold text-xl text-amber-400'>FAST</span>.
              </p>
              <p className='text-white'>
              Given the many opportunities
              I've had in my career, I have always strived to learn and improve my various skill sets.
              I love a good challenge and with SO MUCH to learn, I consider myself a student for life. With my experience, I plan to use my Web Development
              and Engineering skills designing software for auto manufacturers.
              </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About