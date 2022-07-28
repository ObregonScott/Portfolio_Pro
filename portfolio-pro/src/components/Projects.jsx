import React from 'react'
import MRU from '../assets/MRUscreen.png';
import Crescendo from '../assets/crescendoSS.png';
import Musicology from '../assets/musicologySS.png';
import PassGen from '../assets/passGen.png';
import NoteTRK from '../assets/noteTKR.png';
import Weather from '../assets/weatherDash.png';




const Projects = () => {
    return (
        <div name='projects' className='w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-start w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-white border-white'>Projects</p>
                    <p className='py-6'>Check Out Some Of My Recent Work</p>
                </div>

{/* Containter */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* Crescendo Grid Item */}
                    <div 
                    style={{ backgroundImage: `url(${Crescendo})` }}
                    className='shadow-lg shadow-gray group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Crecendo Music App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>
                    {/* PasswordGen Grid Item */}
                    <div 
                    style={{ backgroundImage: `url(${PassGen})` }}
                    className='shadow-lg shadow-gray group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Crecendo Music App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>
                    {/* MRU Grid Item */}
                    <div 
                    style={{ backgroundImage: `url(${MRU})` }}
                    className='shadow-lg shadow-gray group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Crecendo Music App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>
                    {/* Note Taker Grid Item*/}
                    <div 
                    style={{ backgroundImage: `url(${NoteTRK})` }}
                    className='shadow-lg shadow-gray group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Crecendo Music App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>
                    {/* Musicology Grid Item */}
                    <div 
                    style={{ backgroundImage: `url(${Musicology})` }}
                    className='shadow-lg shadow-gray group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Crecendo Music App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>
                    {/* Weather App Grid Item */}
                    <div 
                    style={{ backgroundImage: `url(${Weather})` }}
                    className='shadow-lg shadow-gray group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Crecendo Music App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Projects