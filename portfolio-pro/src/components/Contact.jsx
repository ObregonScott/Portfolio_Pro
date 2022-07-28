import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/10edea03-1f29-4e2d-be81-083ee2152b3d" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-white text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>Submitt the form below or shoot me an email - obregon.scott@gmail.com</p>
                </div>
                
                <input type="text" placeholder='Name' name='name' className='bg-[#ccd6f6] p-2' />
                <input type="email" placeholder='Email' name='email' className='my-4 p-2 bg-[#ccd6f6]' />
                <textarea name='message' rows='10' className='bg-[#ccd6f6]' placeholder='Message'> </textarea>
                <button className='text-white border-2 hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>

        </div>
    )
}

export default Contact