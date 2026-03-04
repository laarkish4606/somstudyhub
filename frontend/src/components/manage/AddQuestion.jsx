import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAddQuestion,
  setCorrectAnswer,
  setOptionsA,
  setOptionsB,
  setOptionsC,
  setOptionsD,
  setQuestion,
  setSelectedGrade,
  setSelectedYear,
  setSelectedCourse
} from "../../features/courses/mcqSlice";

const AddQuestion = () => {

const years = useSelector((state) => state.year.years);
const courses = useSelector((state) => state.course.courses);
const mcqs = useSelector((state) => state.mcq.question);
// console.log(mcqs)

const dispatch=useDispatch();

const handleSubmit=(e)=>{
  e.preventDefault();
  dispatch(setAddQuestion());
  console.log("added question");
  console.log(mcqs);
}
  return (
    <div className="w-full min-h-3.5 flex justify-center items-start p-6 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      <div className="w-full max-w-3xl p-6 bg-gray-800 bg-opacity-80 rounded-lg shadow-lg mt-10">
        <h1 className="text-3xl font-heading font-semibold text-center text-white mb-8">
          Add Multiple Choice Question
        </h1>

        {/* Subject and Year Dropdown */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
           <select
            className="border border-gray-600 rounded px-4 py-2 w-full md:w-1/2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
           onChange={(e) => dispatch(setSelectedGrade(e.target.value))}
          >
            <option value="">Select Grade</option>
            {years.map((item, index) => (
        <option key={index} value={item.grade}>
          {item.grade}
        </option>
       ))}

            
          </select>
          <select
            className="border border-gray-600 rounded px-4 py-2 w-full md:w-1/2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onChange={(e) => dispatch(setSelectedCourse(e.target.value))}
          >
            <option value="">Select Subject</option>
           {
            courses.map((item,index)=>(
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))
           }
           
          </select>

          <select
            className="border border-gray-600 rounded px-4 py-2 w-full md:w-1/2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onChange={(e) => dispatch(setSelectedYear(e.target.value))}
          >
            <option value="">Select Year</option>
            {
              years.map((item, index) => (
                <option key={index} value={item.year}>
                  {item.year}
                </option>
              ))
            }
          
          </select>
         
        </div>

    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
  <div className="flex flex-col">
    <label className="font-medium text-gray-200 mb-1">
      Question
    </label>
    <textarea
    onChange={(e)=>dispatch(setQuestion(e.target.value))}
      name="question"
      placeholder="Enter question here"
      rows={3}
      className="border border-gray-600 rounded px-4 py-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
    />
  </div>


  <div className="flex flex-col">
    <label className="font-medium text-gray-200 mb-1">
      Option A
    </label>
    <input
      onChange={(e)=>dispatch(setOptionsA(e.target.value))}
      type="text"
      name="optionA"
      placeholder="Enter option A"
      className="border border-gray-600 rounded px-4 py-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
    />
  </div>


  <div className="flex flex-col">
    <label className="font-medium text-gray-200 mb-1">
      Option B
    </label>
    <input
    onChange={(e)=>dispatch(setOptionsB(e.target.value))}
      type="text"
      name="optionB"
      placeholder="Enter option B"
      className="border border-gray-600 rounded px-4 py-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
    />
  </div>


  <div className="flex flex-col">
    <label className="font-medium text-gray-200 mb-1">
      Option C
    </label>
    <input
    onChange={(e)=>dispatch(setOptionsC(e.target.value))}
      type="text"
      name="optionC"
      placeholder="Enter option C"
      className="border border-gray-600 rounded px-4 py-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
    />
  </div>


  <div className="flex flex-col">
    <label className="font-medium text-gray-200 mb-1">
      Option D
    </label>
    <input
    onChange={(e)=>dispatch(setOptionsD(e.target.value))}
      type="text"
      name="optionD"
      placeholder="Enter option D"
      className="border border-gray-600 rounded px-4 py-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
    />
  </div>

  {/* Correct Answer */}
  <div className="flex flex-col">
    <label className="font-medium text-gray-200 mb-1">
      Correct Answer (a / b / c / d)
    </label>
    <input
    onChange={(e)=>dispatch(setCorrectAnswer(e.target.value))}
      type="text"
      name="correctAnswer"
      placeholder="Enter correct answer"
      className="border border-gray-600 rounded px-4 py-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
    />
  </div>

  <button
    type="submit"
    className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded transition-colors"
  >
    Submit
  </button>
    </form>

      </div>
    </div>
  );
};

export default AddQuestion;