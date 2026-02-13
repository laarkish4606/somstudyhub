import React from 'react'

const Grade6 = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-center mt-10'>display course</h1>

      <div className='flex justify-center mt-4 '>
        <input type='text' placeholder='Search course...' className='border border-gray-300 rounded-lg px-4 py-2 w-64' />
        <button className='ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg'>Search</button>
      </div>

      <p className='ml-2 text-black text-center px-4 py-2  mt-4'>Select your subject and year to start practicing</p>
      
      <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-6xl cursor-pointer'>
        <div className='bg-white shadow-lg rounded-lg p-6'>
          <h2 className='text-xl font-bold text-center'>Mathematics</h2>
          <p className='text-center mt-2'>Grade 6 Mathematics curriculum</p>
        </div>
        <div className='bg-white shadow-lg rounded-lg p-6 cursor-pointer'>
          <h2 className='text-xl font-bold text-center cursor-pointer'>Science</h2>
          <p className='text-center mt-2'>Grade 6 Science curriculum</p>
        </div>
        <div className='bg-white shadow-lg rounded-lg p-6'>
          <h2 className='text-xl font-bold text-center'>English</h2>
          <p className='text-center mt-2'>Grade 6 English curriculum</p>
        </div>
      </div>
      <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-6xl cursor-pointer'>
        <div className='bg-white shadow-lg rounded-lg p-6'>
          <h2 className='text-xl font-bold text-center'>Mathematics</h2>
          <p className='text-center mt-2'>Grade 6 Mathematics curriculum</p>
        </div>
        <div className='bg-white shadow-lg rounded-lg p-6 cursor-pointer'>
          <h2 className='text-xl font-bold text-center'>Science</h2>
          <p className='text-center mt-2'>Grade 6 Science curriculum</p>
        </div>
        <div className='bg-white shadow-lg rounded-lg p-6'>
          <h2 className='text-xl font-bold text-center'>English</h2>
          <p className='text-center mt-2'>Grade 6 English curriculum</p>
        </div>
      </div>

    </div>
  )
}

export default Grade6