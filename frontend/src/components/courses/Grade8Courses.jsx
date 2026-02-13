import React from 'react'

const courses = [
  { name: 'Mathematics', desc: 'Grade 8 Mathematics curriculum' },
  { name: 'Science', desc: 'Grade 8 Science curriculum' },
  { name: 'English', desc: 'Grade 8 English curriculum' },
  { name: 'Biology', desc: 'Grade 8 Biology curriculum' },
  { name: 'Physics', desc: 'Grade 8 Physics curriculum' },
  { name: 'Civics', desc: 'Grade 8 Civics curriculum' },
]

const Grade8Courses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 px-6 py-12">
      
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-6">
        Grade 8 Courses
      </h1>

      <p className="text-center text-white/80 mb-10">
        Select your subject and year to start practicing
      </p>

      {/* Search */}
      <div className="flex justify-center mb-12">
        <div className="flex bg-white/10 backdrop-blur-lg rounded-full p-2 w-full max-w-md">
          <input
            type="text"
            placeholder="Search course..."
            className="
              flex-1 bg-transparent text-white placeholder-white/60
              px-4 outline-none
            "
          />
          <button
            className="
              bg-indigo-600 hover:bg-indigo-700
              text-white px-6 py-2
              rounded-full font-semibold
              transition-all duration-300
            "
          >
            Search
          </button>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className="
              bg-white/15 backdrop-blur-xl
              border border-white/20
              rounded-2xl p-8 text-center
              cursor-pointer
              transform transition-all duration-300
              hover:scale-105 hover:bg-white/25
              hover:shadow-2xl hover:ring-2 hover:ring-indigo-400/50
            "
          >
            <h2 className="text-2xl font-bold text-white mb-3">
              {course.name}
            </h2>

            <p className="text-white/80 text-sm">
              {course.desc}
            </p>

            <button
              className="
                mt-6 px-6 py-2
                bg-white text-indigo-600
                rounded-full font-semibold
                transition-all duration-300
                hover:bg-indigo-600 hover:text-white
              "
            >
              Start Practice
            </button>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Grade8Courses