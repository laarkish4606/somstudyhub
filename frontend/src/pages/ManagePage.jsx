import { useState } from "react";
import AddQuestion from "../components/manage/AddQuestion";
const ManagePage = () => {
  const [open, setOpen] =useState(false);
    const courses = [
  { name: 'Mathematics', desc: 'Grade 8 Mathematics curriculum' },


]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 px-6 py-12">
      
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-6">
      manage courses
      </h1>

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
         <div className="flex  rounded-full p-2 w-full max-w-md gap-4 ">
        <button
            className="
              bg-indigo-600 hover:bg-indigo-700
              mtext-white px-6 py-2
              rounded-full font-semibold
              transition-all duration-300
            "
          >
            Add Course
          </button>
 <button
  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full"
  onClick={() => setOpen(true)}
>
  Add Questions
</button>

{open && (
  <div className="absolute inset-x-0 top-0 bg-black bg-opacity-60 z-50 py-10">
    
    <div className="relative w-full max-w-3xl mx-auto">

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setOpen(false)}
        className="absolute -top-4 -right-4 bg-white text-gray-700
                   w-9 h-9 rounded-full shadow flex items-center justify-center
                   hover:text-red-500"
      >
        ✕
      </button>

    
      <div className="max-h-[80vh] overflow-y-auto p-6">
        <AddQuestion />
      </div>

    </div>
  </div>
)}

      </div>
          
      </div>


      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className="
              bg-white/15 
              border border-white/20
              rounded-2xl p-1 text-center
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

           <div className="flex justify-center gap-4 ">
             <button
              className="
                mt-6 px-6 py-2
                bg-green-500 text-white
                rounded-full font-semibold
                transition-all duration-300
                hover:bg-green-600 hover:text-white
               
              "
            >
                Edit Course
            </button>
            <button
              className="
                mt-6 px-6 py-2
                bg-red-500 text-white
                rounded-full font-semibold
                transition-all duration-300
                hover:bg-red-600 hover:text-white
              "
            >
            Delete
            </button>
           </div>
          </div>
        ))}
      </div>

    </div>
    
  );
  
};

export default ManagePage;