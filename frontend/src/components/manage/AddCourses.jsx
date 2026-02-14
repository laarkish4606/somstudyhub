import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCourse } from "../../features/courses/courseSlice.js";

const AddCourses = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.course.courses);

  const [courseName, setCourseName] = useState("");
  const [courseDesc, setCourseDesc] = useState("");

  // Year related states
  const [years, setYears] = useState([]); // list of available years
  const [selectedYear, setSelectedYear] = useState(""); // selected year from dropdown
  const [yearLevel, setYearLevel] = useState(""); // modal input for new year
  const [yearDesc, setYearDesc] = useState(""); // modal input for new year description

  const [showYearModal, setShowYearModal] = useState(false);

  // Add course submit
  const handleSubmitCourse = (e) => {
    e.preventDefault();

    if (!selectedYear) {
      alert("Please select a year.");
      return;
    }

    dispatch(
      addCourse({
        name: courseName,
        description: courseDesc,
        year: selectedYear,
        yearDescription: years.find((y) => y === selectedYear)?.desc || "",
      })
    );

    // Clear form
    setCourseName("");
    setCourseDesc("");
    setSelectedYear("");
  };

  // Add year submit (modal)
  const handleAddYear = (e) => {
    e.preventDefault();
    if (!yearLevel) return;

    // Prevent duplicate years
    if (!years.some((y) => y.level === yearLevel)) {
      setYears([...years, { level: yearLevel, desc: yearDesc }]);
    }

    // Auto-select the newly added year
    setSelectedYear(yearLevel);

    // Clear modal inputs and close modal
    setYearLevel("");
    setYearDesc("");
    setShowYearModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-6">
        Add New Course
      </h1>

      {/* Main Course Form */}
      <form
        onSubmit={handleSubmitCourse}
        className="max-w-md mx-auto bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-6"
      >
        {/* Course Name */}
        <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
              <label
            className="block text-gray-300 font-bold mb-2"
            htmlFor="courseName"
          >
            Course Name
          </label>
           <button
              type="button"
              className="ml-2 text-indigo-400 hover:text-indigo-300"
              onClick={() => setShowYearModal(true)} // Open modal
            >
              +Year
            </button>
        </div>
          <input
            type="text"
            id="courseName"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            className="w-full px-4 py-2 bg-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter course name"
            required
          />
        </div>

        {/* Course Description */}
        <div className="mb-4">
          <label
            className="block text-gray-300 font-bold mb-2"
            htmlFor="courseDesc"
          >
            Course Description
          </label>
          <textarea
            id="courseDesc"
            value={courseDesc}
            onChange={(e) => setCourseDesc(e.target.value)}
            className="w-full px-4 py-2 bg-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter course description"
            required
          />
        </div>

        {/* Year Selection */}
        <div className="mb-4">
          
          <select
            id="yearSelect"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="w-full px-4 py-2 bg-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          >
            <option value="Select year" enabled selected >
              Select year
            </option>
            {years.map((y, idx) => (
              <option key={idx} value={y.level} className="text-black">
                {y.level} 
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all duration-300"
        >
          Add Course
        </button>
      </form>

      {/* Add Year Modal */}
      {showYearModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl w-96 relative">
            <button
              onClick={() => setShowYearModal(false)}
              className="absolute top-2 right-2 text-white text-xl font-bold hover:text-red-400"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold text-white mb-4">Add Year</h2>

            <form onSubmit={handleAddYear}>
              <div className="mb-4">
                <label
                  className="block text-gray-300 font-bold mb-2"
                  htmlFor="yearLevel"
                >
                  Year Level
                </label>
                <input
                  type="text"
                  id="yearLevel"
                  value={yearLevel}
                  onChange={(e) => setYearLevel(e.target.value)}
                  className="w-full px-4 py-2 bg-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter year"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-300 font-bold mb-2"
                  htmlFor="yearDesc"
                >
                  Year Description
                </label>
                <textarea
                  id="yearDesc"
                  value={yearDesc}
                  onChange={(e) => setYearDesc(e.target.value)}
                  className="w-full px-4 py-2 bg-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter year description (optional)"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Add Year
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCourses;