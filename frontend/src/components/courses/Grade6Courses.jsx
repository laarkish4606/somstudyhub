import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Grade6Courses = () => {
  const { year } = useParams(); // get clicked year from URL
  const allCourses = useSelector((state) => state.course.courses);

  // filter courses that match selected year
  const filteredCourses = allCourses.filter(
    (course) => String(course.year) === String(year)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 px-6 py-12">
      
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-10">
        Grade 6 - {year} Exams
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {filteredCourses.length === 0 ? (
          <p className="text-white text-center col-span-full">
            No exams found for {year}.
          </p>
        ) : (
          filteredCourses.map((course, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-8 text-center transform transition-all duration-300 hover:scale-105 hover:bg-white/30"
            >
              <h2 className="text-2xl font-bold text-white mb-3">
                {course.name}
              </h2>

              <p className="text-white/80 mb-4">
                {course.description}
              </p>

              <button className="px-6 py-2 bg-white text-indigo-600 rounded-full font-semibold hover:bg-indigo-600 hover:text-white transition">
                Start Practice
              </button>
            </div>
          ))
        )}

      </div>
    </div>
  );
};

export default Grade6Courses;