import bgImage from '../../assets/home.png';

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden py-6">
      
      {/* Background Image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between h-full">
        
        {/* Left Text */}
        <div className="lg:w-1/2 text-center lg:text-left text-white space-y-6">
          <span className="inline-block bg-indigo-600/80 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide shadow-md">
            Trusted by 12,500+ Students
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mt-4 animate-fadeIn">
            Access Past Exams for <span className="text-indigo-400">Grades 6, 8 & 12</span> Anytime, Anywhere
          </h1>

          <p className="text-white/80 text-lg md:text-xl max-w-lg mt-4 animate-fadeIn delay-200">
            Comprehensive exam archive platform designed to help students excel. Browse hundreds of past exams, practice effectively, and boost your academic performance.
          </p>

          <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4 animate-fadeIn delay-400">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition transform hover:scale-105">
              Get Started
            </button>
            <button className="bg-white/20 hover:bg-white/40 text-white font-bold py-3 px-6 rounded-full shadow-lg transition transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
       <div className="relative lg:w-1/2 mt-10 lg:mt-0 h-[450px] rounded-2xl overflow-hidden animate-fadeIn">

  {/* Image */}
  <img
    src={bgImage}
    alt="Student Studying"
    className="w-full h-full object-cover"
  />

  {/* Left Side Gradient */}
  <div className="absolute inset-y-0 left-0 w-1/3 
    bg-gradient-to-r from-indigo-900/80 to-transparent">
  </div>

  {/* Right Side Gradient */}
  <div className="absolute inset-y-0 right-0 w-1/3 
    bg-gradient-to-l from-purple-900/80 to-transparent">
  </div>

</div>

      </div>

      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/30 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-500/30 rounded-full filter blur-3xl translate-x-1/3 translate-y-1/3"></div>

    </div>
  )
}

export default HeroSection