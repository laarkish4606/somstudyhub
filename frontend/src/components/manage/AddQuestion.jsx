import React, { useState } from 'react';

const AddQuestion = () => {
  const [open, setOpen] =useState(false);
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
          >
            <option value="">Select Subject</option>
            <option value="Maths">Maths</option>
            <option value="Science">Science</option>
            <option value="History">History</option>
          </select>

          <select
            className="border border-gray-600 rounded px-4 py-2 w-full md:w-1/2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="">Select Year</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
          </select>
        </div>

        {/* Question Form */}
        <form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="question" className="font-medium text-gray-200 mb-1">
              Question
            </label>
            <textarea
              id="question"
              name="question"
              placeholder="Enter question here"
              className="border border-gray-600 rounded px-4 py-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
              rows={3}
            />
          </div>

          {/* Options */}
          {['A', 'B', 'C', 'D'].map((opt) => (
            <div key={opt} className="flex flex-col">
              <label htmlFor={`option${opt}`} className="font-medium text-gray-200 mb-1">
                Option {opt}
              </label>
              <input
                type="text"
                id={`option${opt}`}
                name={`option${opt}`}
                placeholder={`Enter option ${opt}`}
                className="border border-gray-600 rounded px-4 py-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          ))}

          <div className="flex flex-col">
            <label htmlFor="correctAnswer" className="font-medium text-gray-200 mb-1">
              Correct Answer
            </label>
            <input
              type="text"
              id="correctAnswer"
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