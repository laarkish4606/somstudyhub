import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Grade6Courses = () => {
  const { state } = useLocation();
  const selectedYear = state?.year;

  const courses = useSelector((state) =>
    state.course.courses.filter(
      (c) => c.grade === "grade6" && c.year === selectedYear
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-10">
        Grade 6  Exam – {selectedYear}
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
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="bg-white/20 backdrop-blur-xl border border-white/30
                       rounded-2xl p-6 text-center cursor-pointer
                       transform transition-all duration-300
                       hover:scale-105 hover:bg-white/30
                       hover:shadow-2xl hover:ring-2 hover:ring-indigo-400/50"
          >
            <h2 className="text-2xl font-bold text-white mb-2">{course.name}</h2>
            <p className="text-white/80 text-sm">{course.desc}</p>
            <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-all duration-300">
              Start Practice
            </button>
          </div>
        ))}

        {courses.length === 0 && (
          <p className="text-white text-center col-span-full">
            No courses for this year.
          </p>
        )}
      </div>
    </div>
  );
};

export default Grade6Courses;
