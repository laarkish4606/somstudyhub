import React from 'react'

const Developers = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <h2 className='text-3xl font-bold mb-6'>Meet the Developers</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <div className='bg-white p-6 rounded shadow-md text-center'>
          <img src='/images/developer1.jpg' alt='Developer 1' className='w-24 h-24 rounded-full mx-auto mb-4' />
          <h3 className='text-xl font-bold'>Abdikadir Mohamed</h3>
          <p className='text-gray-600'>Full Stack Developer</p>
        </div>
        <div className='bg-white p-6 rounded shadow-md text-center'>
          <img src='/images/developer2.jpg' alt='Developer 2' className='w-24 h-24 rounded-full mx-auto mb-4' />
          <h3 className='text-xl font-bold'>Ahmed Mahamed</h3>
          <p className='text-gray-600'>Frontend Developer</p>
        </div>
        <div className='bg-white p-6 rounded shadow-md text-center'>
          <img src='/images/developer3.jpg' alt='Developer 3' className='w-24 h-24 rounded-full mx-auto mb-4' />
          <h3 className='text-xl font-bold'>Mohamed Ali</h3>
          <p className='text-gray-600'>Backend Developer</p>
        </div>
      </div>
    </div>
  )
}

export default Developers