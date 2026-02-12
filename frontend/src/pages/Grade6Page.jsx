import React from 'react'
import Grade6 from '../components/grades/grade6'
import Footer from '../components/footers/footer'

const Grade6Page = () => {
  return (
    <div className='flex flex-col gap-10'>
      <Grade6/>
      <Footer/>
    </div>
  )
}

export default Grade6Page