import React from 'react'

const Contact = () => {
  return (
    // create a contact component put right side of the page a form and left side of the page a call to action to contact us
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded shadow-md w-full max-w-5xl'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Contact Us</h2>
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='md:w-1/2'>
            <h3 className='text-xl font-bold mb-4 '>Get in Touch</h3>
            <p className='mb-4 text-gray-600'>Have questions or need assistance? We're here to help! Fill out the form, and our team will get back to you as soon as possible.</p>
            <p className='mb-4 text-gray-600 '>Email: <span className='text-blue-500 underline'>contact@somstudyhub.com</span></p>
            <p className='mb-4 text-gray-600'>Phone: +123 456 7890</p>
            <p className='mb-4 text-gray-600'>Address: 123 Study Lane, Education City, Country</p>
          </div>
          <div className='md:w-1/2'>
            <form>
              <div className='mb-4'>
                <label className='block text-gray-700 font-bold mb-2' htmlFor='name'>Name</label>
                <input className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type='text' id='name' placeholder='Enter your name' required />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 font-bold mb-2' htmlFor='email'>Email</label>
                <input className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type='email' id='email' placeholder='Enter your email' required />
              </div>
              <div className='mb-6'>
                <label className='block text-gray-700 font-bold mb-2' htmlFor='message'>Message</label>
                <textarea className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' id='message' placeholder='Enter your message' required rows='5'></textarea>
              </div>
              <button className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='submit'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default Contact