import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Grade8Courses = () => {
  const { state } = useLocation();
  const selectedYear = state?.year;

  const courses = useSelector((state) =>
    state.course.courses.filter(
      (c) => c.grade === "grade8" && c.year === selectedYear
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-6">
        Grade 8  Exam – {selectedYear}
      </h1>

        <div className="flex flex-col items-center justify-center text-center mb-12 px-4">
  
  <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-wide">
    Explore Your Courses
  </h1>

  <p className="text-white/70 max-w-xl mb-6 text-sm md:text-base">
    Find past exam courses, explore subjects, and start practicing with confidence.
  </p>

  <div className="flex items-center bg-white/10 backdrop-blur-lg rounded-full p-2 w-full max-w-md">
    <input
      type="text"
      placeholder="Search courses..."
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


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white/15 backdrop-blur-xl border border-white/20
                       rounded-2xl p-8 text-center cursor-pointer
                       transform transition-all duration-300
                       hover:scale-105 hover:bg-white/25
                       hover:shadow-2xl hover:ring-2 hover:ring-indigo-400/50"
          >
            <h2 className="text-2xl font-bold text-white mb-3">
              {course.name}
            </h2>

            <p className="text-white/80 text-sm">
              {course.description}
            </p>

            <button
              className="mt-6 px-6 py-2 bg-white text-indigo-600
                         rounded-full font-semibold transition-all duration-300
                         hover:bg-indigo-600 hover:text-white"
            >
              Start Practice
            </button>
          </div>
        ))}

        {courses.length === 0 && (
          <p className="text-white text-center col-span-full">
            No courses added for this year.
          </p>
        )}
      </div>
    </div>
  );
};

export default Grade8Courses;
