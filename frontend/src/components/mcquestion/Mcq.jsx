import React, { useRef, useState } from "react";
import data from "../../assets/data.json";

const Mcq = () => {
  let [index, setIndex] = useState(0);
  let [lock, setLock] = useState(false);
  const [question,setQuestion] = useState(data[index]);
  const [score, setScore] = useState(0);
  let [result, setResult] = useState(false );

  const optionA = useRef(null);
  const optionB = useRef(null);
  const optionC = useRef(null);
  const optionD = useRef(null);

  const optionMap = {
    optionA,
    optionB,
    optionC,
    optionD,
  };

 const checkAnswer = (selectedOption) => {
  if (lock) return; 
  setLock(true);

  // Correct answer
  if (selectedOption === question.ans) {
    setScore(prev => prev + 1); // increment score
    const correctRef = optionMap[question.ans].current;
    if (correctRef) {
      correctRef.classList.add("bg-green-200", "border-green-300", "text-green-800");
    }
  } else {
    const selectedRef = optionMap[selectedOption].current;
    if (selectedRef) {
      selectedRef.classList.add("bg-red-200", "border-red-400", "text-red-800");
    }

    // Also highlight the correct answer
    const correctRef = optionMap[question.ans].current;
    if (correctRef) {
      correctRef.classList.add("bg-green-200", "border-green-300", "text-green-800");
    }
  }

  // If last question, mark result
  if (index === data.length - 1) {
    setResult(true);
  }
};

const nextQuestion = () => {
  if (!lock) return; // prevent moving forward before answering

  setLock(false);

  // Remove classes from all option refs
  Object.values(optionMap).forEach((optionRef) => {
    if (optionRef.current) {
      optionRef.current.classList.remove(
        "bg-green-200",
        "border-green-300",
        "text-green-800",
        "bg-red-200",
        "border-red-400",
        "text-red-800"
      );
    }
  });

  setIndex((prev) => {
    const nextIndex = prev + 1;

    if (nextIndex < data.length) {
      // Update question only if there are more questions
      setQuestion(data[nextIndex]);
      return nextIndex;
    } else {
      // Last question reached → handle submission
      console.log("Quiz Completed! Your score:", score);
      // You can trigger any "submit" action or show result here
      return prev; // stay on the last question
    }
  });
};

const resetQuiz = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setResult(false);
    setLock(false);
}
const previousQuestion = () => {
  if (index === 0) return;

  // Remove all option highlights
  Object.values(optionMap).forEach(ref => {
    if (ref.current) {
      ref.current.classList.remove(
        "bg-green-200", "border-green-300", "text-green-800",
        "bg-red-200", "border-red-400", "text-red-800"
      );
    }
  });

  const prevIndex = index - 1;

  setIndex(prevIndex);
  setQuestion(data[prevIndex]);

  setLock(false);
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 px-4 py-7">
  <div
  className="
    w-full
    max-w-[640px]  /* max width on larger screens */
    md:max-w-2xl    /* bigger max-width on medium screens */
    lg:max-w-3xl    /* large screens */
    xl:max-w-4xl
    bg-white/95 
    backdrop-blur-lg 
    text-gray-800 
    rounded-2xl 
    shadow-2xl 
    p-6 
    sm:p-8 
    md:p-10
    flex flex-col gap-6
  "
>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-indigo-700">
          Quiz App
        </h2>

        <hr className="border-gray-200" />
      {result ? <><h1 className="text-center text-xl font-bold text-indigo-700">Your Score: {score} out of {data.length}</h1>
      <button className="px-5 py-2 rounded-xl bg-indigo-600 text-white font-semibold transition-all duration-300 hover:bg-indigo-700 shadow-md mx-auto block" onClick={resetQuiz}>Reset</button></>:<>
          <h3 className="text-lg sm:text-xl font-semibold leading-relaxed text-center">
          {index + 1}. {question.question}
        </h3>

        <ul className="flex flex-col gap-3">
          <li
            ref={optionA}
            className="px-5 py-3 rounded-lg cursor-pointer border border-gray-300 bg-gray-50 text-gray-700 transition-all duration-300 "
            onClick={() => checkAnswer("optionA")}
          >
            {question.optionA}
          </li>
          <li
            ref={optionB}
            className="px-5 py-3 rounded-lg cursor-pointer border border-gray-300 bg-gray-50 text-gray-700 transition-all duration-300 "
            onClick={() => checkAnswer("optionB")}
          >
            {question.optionB}
          </li>
          <li
            ref={optionC}
            className="px-5 py-3 rounded-lg cursor-pointer border border-gray-300 bg-gray-50 text-gray-700 transition-all duration-300 "
            onClick={() => checkAnswer("optionC")}
          >
            {question.optionC}
          </li>
          <li
            ref={optionD}
            className="px-5 py-3 rounded-lg cursor-pointer border border-gray-300 bg-gray-50 text-gray-700 transition-all duration-300 "
            onClick={() => checkAnswer("optionD")}
          >
            {question.optionD}
          </li>
        </ul>

        <div className="flex justify-between items-center gap-4 mt-4">
         <button
  onClick={previousQuestion}
  className="px-5 py-2 rounded-xl bg-gray-200 text-gray-700 font-semibold transition-all duration-300 hover:bg-gray-300 disabled:opacity-50"
  disabled={index === 0} // disable button on first question
>
  Previous
</button>

          <button className="px-5 py-2 rounded-xl bg-indigo-600 text-white font-semibold transition-all duration-300 hover:bg-indigo-700 shadow-md"
          onClick={nextQuestion}
          >
            Next
          </button>
        </div>

        <div className="text-center text-sm text-gray-500 mt-2">
          Question <span className="font-semibold">{index + 1}</span> of{" "}
          <span className="font-semibold">{data.length}</span>
        </div>

      </> }
      
    
      </div>
    </div>
  );
};

export default Mcq;
