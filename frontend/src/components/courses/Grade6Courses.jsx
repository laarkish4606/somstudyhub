import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaBookOpen } from "react-icons/fa";

import {
  setSelectedGrade,
  setSelectedYear,
  setSelectedCourse
} from "../../features/courses/mcqSlice";

const Grade6Courses = () => {
  const { state } = useLocation();
  const selectedYear = state?.year;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const courses = useSelector((state) =>
    state.course.courses.filter(
      (c) => c.grade === "grade6" && c.year === selectedYear
    )
  );

  const handleStartPractice = (course) => {
    dispatch(setSelectedGrade("grade6"));
    dispatch(setSelectedYear(selectedYear));
    dispatch(setSelectedCourse(course.name));
    navigate("/mcq");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-10">
        Grade 6 Exams – {selectedYear}
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


      {courses.length === 0 && (
        <p className="text-white/70 text-center mb-10 text-sm md:text-base">
          No courses added yet for this year.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="bg-white/5 border-l-4 border-indigo-600 rounded-xl p-4 cursor-pointer
                       transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-md
                       flex flex-col justify-between"
          >
            {/* Icon + Course Row */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-indigo-600/20 rounded-full flex items-center justify-center text-white text-lg">
                <FaBookOpen />
              </div>
              <h2 className="text-xl font-semibold text-white">{course.name}</h2>
            </div>

            {/* Description */}
            <p className="text-white/80 text-sm line-clamp-2 mb-2">{course.desc}</p>

            {/* Button */}
            <button
              onClick={() => handleStartPractice(course)}
              className="mt-auto px-4 py-1 bg-indigo-600 hover:bg-indigo-700
                         text-white font-semibold rounded-full shadow-sm transition-all duration-300"
            >
              Start Practice →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grade6Courses;
