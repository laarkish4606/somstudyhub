import React from 'react'

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded shadow-md w-full max-w-md'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Create an Account</h2>
        <form>
          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2' htmlFor='name'>Name</label>
            <input className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type='text' id='name' placeholder='Enter your name' />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2' htmlFor='email'>Email</label>
            <input className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type='email' id='email' placeholder='Enter your email' />
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 font-bold mb-2' htmlFor='password'>Password</label>
            <input className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type='password' id='password' placeholder='Enter your password' />
          </div>
          <button className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='submit'>Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default Signup