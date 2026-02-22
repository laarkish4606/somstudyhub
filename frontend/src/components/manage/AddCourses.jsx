import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCource,
  setCourDes,
  addCource,
  setGrades,
  setYear,
} from "../../features/courses/courseSlice.js";
import {
  setYearLevel,
  setYearDesc,
  addYear,
  setGrade,
} from "../../features/courses/yearsSlice.js";
import { useNavigate } from "react-router-dom";

const AddCourses = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showYearModal, setShowYearModal] = useState(false);

  // === Redux selectors at top level ===
  const { cource, courDes, grade: selectedGrade, yearType: selectedYear } =
    useSelector((state) => state.course);
  const { year, desc, grade } = useSelector((state) => state.year);
  const years = useSelector((state) => state.year.years);

  // === Handlers ===
  const handleSubmitCourse = (e) => {
    e.preventDefault();
    dispatch(addCource());
    navigate("/");
    console.log("added course");
  };

  const handleSubmitYear = (e) => {
    e.preventDefault();
    dispatch(addYear());
    setShowYearModal(false);
    console.log("added year");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-6">
        Add New Course
      </h1>

      <form
        onSubmit={handleSubmitCourse}
        className="max-w-md mx-auto bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-6"
      >
        {/* Course Name */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <label className="block text-gray-300 font-bold mb-2" htmlFor="courseName">
              Course Name
            </label>
            <button
              type="button"
              className="ml-2 hover:text-indigo-300 bg-blue-600 text-white p-2 rounded"
              onClick={() => setShowYearModal(true)}
            >
              +Year
            </button>
          </div>
          <input
            type="text"
            id="courseName"
            value={cource}
            onChange={(e) => dispatch(setCource(e.target.value))}
            className="w-full px-4 py-2 bg-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter course name"
            required
          />
        </div>

        {/* Course Description */}
        <div className="mb-4">
          <label className="block text-gray-300 font-bold mb-2" htmlFor="courseDesc">
            Course Description
          </label>
          <textarea
            id="courseDesc"
            value={courDes}
            onChange={(e) => dispatch(setCourDes(e.target.value))}
            className="w-full px-4 py-2 bg-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter course description"
            required
          />
        </div>

        {/* Grade Selection */}
        <div className="mb-4">
          <select
            className="w-full mt-5 px-4 py-2 bg-slate-400 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={selectedGrade}
            onChange={(e) => dispatch(setGrades(e.target.value))}
            required
          >
            <option value="">Select grade</option>
            <option value="grade6">Grade 6</option>
            <option value="grade8">Grade 8</option>
            <option value="grade10">Grade 10</option>
          </select>

          {/* Year Selection filtered by selected grade */}
          <select
            className="w-full px-4 py-2 bg-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-3"
            value={selectedYear}
            onChange={(e) => dispatch(setYear(e.target.value))}
            required
          >
            <option value="">Select year</option>
            {years
              .filter((y) => y.grade === selectedGrade)
              .map((yea, index) => (
                <option key={index} value={yea.year} className="text-black">
                  {yea.year}
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

            <form onSubmit={handleSubmitYear}>
              <div className="mb-4">
                <label className="block text-gray-300 font-bold mb-2" htmlFor="yearLevel">
                  Year Level
                </label>
                <input
                  type="text"
                  id="yearLevel"
                  value={year}
                  onChange={(e) => dispatch(setYearLevel(e.target.value))}
                  className="w-full px-4 py-2 bg-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter year"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-300 font-bold mb-2" htmlFor="yearDesc">
                  Year Description
                </label>
                <textarea
                  id="yearDesc"
                  value={desc}
                  onChange={(e) => dispatch(setYearDesc(e.target.value))}
                  className="w-full px-4 py-2 bg-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter year description (optional)"
                />
                <select
                  className="mt-5 px-4 py-2 bg-slate-400 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={grade}
                  onChange={(e) => dispatch(setGrade(e.target.value))}
                  required
                >
                  <option value="">Select Grade</option>
                  <option value="grade6">Grade 6</option>
                  <option value="grade8">Grade 8</option>
                  <option value="grade12">Grade 12</option>
                </select>
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
