// Imports
import React from 'react';
import Html from '../assets/html.png';
import CSS from '../assets/css.png';
import TailWind from '../assets/tailwind.png';
import GitHub from '../assets/github.png';
import Python from '../assets/python.png';
import JavaScript from '../assets/javascript.png';
import Node from '../assets/node.png';
import ReactImg from '../assets/react.png';

const Skills = () => {
  return (
    <div name='skills' className='bg-gradient-to-b from-cyan-900 via-cyan-500 to-teal-600 text-white w-full h-screen'>
    {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className=''>
          <p className='text-5xl text-white font-bold inline border-b-4 border-amber-400'>Skills</p>
          <p className='py-4'>These Are The Technologies & Languages I Have Worked With...</p>
        </div>
    {/* Icons */}
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-gray hover:shadow-orange-600 hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Html} alt="HTML icon" />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-gray hover:shadow-blue-700 hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-gray hover:shadow-sky-500 hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={TailWind} alt="Tail Wind icon" />
            <p className='my-4'>TailWind</p>
          </div>
          <div className='shadow-md shadow-gray hover:shadow-white hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={GitHub} alt="Git Hub icon" />
            <p className='my-4'>GitHub</p>
          </div>
          <div className='shadow-md shadow-gray hover:shadow-sky-700 hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Python} alt="Python icon" />
            <p className='my-4'>Python</p>
          </div>
          <div className='shadow-md shadow-gray hover:shadow-yellow-300 hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt="Java Script icon" />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-gray hover:shadow-lime-500 hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Node} alt="Node icon" />
            <p className='my-4'>Node</p>
          </div>
          <div className='shadow-md shadow-gray hover:shadow-cyan-300 hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
            <p className='my-4'>React</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills