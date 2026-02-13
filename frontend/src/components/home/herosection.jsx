import bgImage from '../../assets/home.jpg';

const HeroSection = () => {
  return (

    <div className="relative bg-secondary text-black py-20">
      <div className="container mx-auto flex items-center justify-between gap-10">
        <div className="w-1/2">
          <button className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mb-4">Trusted by 12,500+ Students</button>
          <h1 className="text-6xl font-bold mb-4">Access Past Exams for <span className='text-primary'>Grades 6, 8 & 12</span> Anytime, Anywhere</h1>
          <p className="text-lg mb-6">Comprehensive exam archive platform designed to help students excel. Browse hundreds of past exams, practice effectively, and boost your academic performance with our organized collection.</p>
          <div>
            <button className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mr-4">Get Started</button>
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg">Learn More</button>
          </div>
        </div>
        <div className="w-1/2">
          <img src={bgImage} alt="Student Studying" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection