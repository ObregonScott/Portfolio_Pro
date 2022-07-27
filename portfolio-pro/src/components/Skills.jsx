import React from 'react';
import Html from '../assets/html.png';
import Css from '../assets/css.png';
import TailWind from '../assets/tailwind.png';
import GitHub from '../assets/github.png';
import Python from '../assets/python.png';
import JavaScript from '../assets/javascript.png';
import Node from '../assets/node.png';
import Next from '../assets/nextjs.png';
import MongoDb from '../assets/mongo.png';
import ReactImg from '../assets/react.png';

const Skills = () => {
  return (
    <div name='skills' className='bg-gradient-to-b from-black via-black to-gray-800 text-white'>
      {/* Container */}
      <div className='m-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className=''>
          <p className='text-4xl font-bold border-b-4 border-white'>Experience</p>
          <p className='py-4'>//These are the technologies I've Worked with...</p>
        </div>

        <div className='w-full grid grid-col-2 sm:grid-cols-4 gap-4 text-cebnter py-8'>
          <div>
            <img className='w-20 mx-auto' src={Html} alt="HTML icon" />
            <p>HTML</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills