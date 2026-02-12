
const Years = () => {
 return (
    <div>
      <h1 className='text-3xl font-bold text-center mt-10'>Explore Our Yearly Curriculum</h1>
      <p className='text-center mt-4'>Select your grade level to access tailored courses and resources.</p>
      <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-6xl cursor-pointer'>
        <div className='bg-white shadow-lg rounded-lg p-6'>
          <h2 className='text-xl font-bold text-center'>Year 1</h2>
        </div>
        <div className='bg-white shadow-lg rounded-lg p-6'>
          <h2 className='text-xl font-bold text-center'>Year 2</h2>
        </div>
        <div className='bg-white shadow-lg rounded-lg p-6'>
          <h2 className='text-xl font-bold text-center'>Year 3</h2>
        </div>
      </div>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-6xl cursor-pointer'>
        <div className='bg-white shadow-lg rounded-lg p-6'>
          <h2 className='text-xl font-bold text-center'>Year 4</h2>
        </div>
        <div className='bg-white shadow-lg rounded-lg p-6'>
          <h2 className='text-xl font-bold text-center'>Year 5</h2>
        </div>
        <div className='bg-white shadow-lg rounded-lg p-6'>
          <h2 className='text-xl font-bold text-center'>Year 6</h2>
        </div>
      </div>
    </div>
 )
}
export default Years