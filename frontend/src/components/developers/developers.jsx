import React from 'react'
import dev1 from '../../assets/deve1.jpg'
import dev2 from '../../assets/dev2.jpg'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const developers = [
  {
    name: 'Ahmed Mohamed Somane',
    role: 'Full-Stack Developerr',
    image: dev1,
    github: 'https://github.com/laarkish4606',
    linkedin: 'https://www.linkedin.com/in/ahmed-mohamed-246488338',
    twitter: 'https://x.com/AhmeMohamed4606',
  },
  {
    name: 'Abdikadir Sakariye Mahamud',
    role: 'Full-Stack Developer',
    image: dev2,
    github: 'https://github.com/abdikadirpro',
    linkedin: 'https://www.linkedin.com/in/abdikadir-sakariye-71922b367?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    twitter: 'https://x.com/abdikadir5450?s=11',
  },
]

const Developers = () => {
  return (
    <div className="min-h-screen  bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900  px-6 py-12 text-white">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
        Meet with the Developers
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
        {developers.map((dev, index) => (
          <div
            key={index}
            className="
              bg-white/10 backdrop-blur-xl
              border border-white/20
              rounded-2xl p-8 flex flex-col items-center
              text-center cursor-pointer
              transform transition-all duration-300
              hover:scale-105 hover:bg-white/20
              hover:shadow-2xl hover:ring-2 hover:ring-indigo-400/50
            "
          >
            <img
              src={dev.image}
              alt={dev.name}
              className="w-32 h-32 rounded-full mb-4 shadow-lg border-2 border-white/30 object-cover"
            />
            <h2 className="text-2xl font-bold mb-2">{dev.name}</h2>
            <p className="text-white/80 mb-4">{dev.role}</p>

            <div className="flex space-x-4 text-white text-xl">
              <a href={dev.github} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">
                <FaGithub />
              </a>
              <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
                <FaLinkedin />
              </a>
              <a href={dev.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">
                <FaTwitter />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Developers