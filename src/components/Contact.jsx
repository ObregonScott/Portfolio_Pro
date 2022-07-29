// Imports
import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-gradient-to-b from-blue-600 via-indigo-600 to-violet-600 flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/10edea03-1f29-4e2d-be81-083ee2152b3d" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-5xl text-white font-bold inline border-b-4 border-amber-400'>Contact</p>
                    <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - obregon.scott@gmail.com</p>
                </div>
                
                <input type="text" placeholder='Name' name='name' className='bg-[#ccd6f6] p-2' />
                <input type="email" placeholder='Email' name='email' className='my-4 p-2 bg-[#ccd6f6]' />
                <textarea name='message' rows='10' className='bg-[#ccd6f6]' placeholder='Message'> </textarea>
                <button className='text-white border-2 hover:bg-amber-400 hover:text-black hover:border-blue-600 hover:scale-110 duration-500 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>

        </div>
    )
}

export default Contact