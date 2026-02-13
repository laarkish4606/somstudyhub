import React from 'react'
import { useNavigate } from 'react-router-dom'

const Grade8 = () => {
  const navigate = useNavigate()

  const years = [
    { year: 2016, text: 'Past year 2016 exam available' },
    { year: 2017, text: 'Past year 2017 exam available' },
    { year: 2018, text: 'Past year 2018 exam available' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 flex items-center justify-center px-6">
      <div className="max-w-6xl w-full">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-10 tracking-wide">
          Grade 8 Past Exams
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {years.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate('/grade8courses')}
              className="
                bg-white/20 backdrop-blur-xl
                border border-white/30
                rounded-2xl p-8 text-center
                cursor-pointer
                transform transition-all duration-300
                hover:scale-105 hover:bg-white/30
                hover:shadow-2xl hover:ring-2 hover:ring-white/50
              "
            >
              <h2 className="text-4xl font-bold text-white mb-3">
                {item.year}
              </h2>

              <p className="text-white/90 text-sm md:text-base">
                {item.text}
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
                View Exams
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Grade8