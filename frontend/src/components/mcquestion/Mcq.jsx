import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Mcq = () => {
  const { mcqs, selectedGrade, selectedYear, selectedCourse } =
    useSelector((state) => state.mcq);

  const navigate = useNavigate();

  const questions =
    mcqs?.[selectedGrade]?.[selectedYear]?.[selectedCourse] || [];

  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  if (!questions.length) {
    return (
      <div className="text-white text-center mt-20">
        No questions available {selectedGrade} - {selectedCourse} ({selectedYear})
      </div>
    );
  }

  const currentQuestion = questions[index];

  // ✅ Map option keys to letters
  const optionKeyToLetter = {
    optionsA: "a",
    optionsB: "b",
    optionsC: "c",
    optionsD: "d",
  };

  const checkAnswer = (optionKey) => {
    if (selectedOption) return;

    setSelectedOption(optionKey);

    const selectedLetter = optionKeyToLetter[optionKey];
    if (selectedLetter === currentQuestion.ans) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (!selectedOption) return;

    if (index + 1 < questions.length) {
      setIndex(index + 1);
      setSelectedOption(null);
    } else {
      setResult(true);
    }
  };

  const getOptionStyle = (optionKey) => {
    if (!selectedOption) return "bg-gray-50 border-gray-300";

    const letter = optionKeyToLetter[optionKey];
    const selectedLetter = optionKeyToLetter[selectedOption];

    if (letter === currentQuestion.ans)
      return "bg-green-200 border-green-400 text-green-800";

    if (letter === selectedLetter)
      return "bg-red-200 border-red-400 text-red-800";

    return "bg-gray-50 border-gray-300";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 px-4 py-7">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-8 flex flex-col gap-6">
        <h2 className="text-3xl font-bold text-center text-indigo-700">
          {selectedCourse} last year questions
        </h2>

        {result ? (
          <>
            <h1 className="text-center text-xl font-bold">
              Your Score: {score} / {questions.length}
            </h1>

            <button
              onClick={() => navigate(-1)}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-xl"
            >
              Back
            </button>
          </>
        ) : (
          <>
            <h3 className="text-xl font-semibold text-center">
              {currentQuestion.question}
            </h3>

            <ul className="flex flex-col gap-3">
              {["optionsA", "optionsB", "optionsC", "optionsD"].map((key) => (
                <li
                  key={key}
                  onClick={() => checkAnswer(key)}
                  className={`px-5 py-3 rounded-lg cursor-pointer border transition-all duration-300 ${getOptionStyle(
                    key
                  )}`}
                >
                  {currentQuestion[key]}
                </li>
              ))}
            </ul>

            <button
              onClick={nextQuestion}
              className="mt-4 px-5 py-2 bg-indigo-600 text-white rounded-xl"
            >
              Next
            </button>

            <div className="text-center text-sm text-gray-500">
              Question {index + 1} of {questions.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Mcq;
