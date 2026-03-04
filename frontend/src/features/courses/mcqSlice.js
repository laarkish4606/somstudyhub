import { createSlice } from "@reduxjs/toolkit";

const savedMcqs = JSON.parse(localStorage.getItem("mcqs"));

const initialState = {
  mcqs:
    savedMcqs && typeof savedMcqs === "object" && !Array.isArray(savedMcqs)
      ? savedMcqs
      : {},
  question: "",
  optionsA: "",
  optionsB: "",
  optionsC: "",
  optionsD: "",
  correctAnswer: "",
  selectedGrade: "",
  selectedYear: "",
  selectedCourse: ""
};

const mcqSlice = createSlice({
  name: "mcq",
  initialState,
  reducers: {
    setQuestion: (state, action) => {
      state.question = action.payload;
    },
    setOptionsA: (state, action) => {
      state.optionsA = action.payload;
    },
    setOptionsB: (state, action) => {
      state.optionsB = action.payload;
    },
    setOptionsC: (state, action) => {
      state.optionsC = action.payload;
    },
    setOptionsD: (state, action) => {
      state.optionsD = action.payload;
    },
    setCorrectAnswer: (state, action) => {
      state.correctAnswer = action.payload;
    },
    setSelectedGrade: (state, action) => {
      state.selectedGrade = action.payload;
    },
    setSelectedYear: (state, action) => {
      state.selectedYear = action.payload;
    },
    setSelectedCourse: (state, action) => {
      state.selectedCourse = action.payload;
    },
    setMcqs: (state, action) => {
      state.mcqs = action.payload;
    },

    setAddQuestion: (state) => {
      const { selectedGrade, selectedYear, selectedCourse } = state;

      if (!selectedGrade || !selectedYear || !selectedCourse) return;

      if (!state.mcqs[selectedGrade]) {
        state.mcqs[selectedGrade] = {};
      }

      if (!state.mcqs[selectedGrade][selectedYear]) {
        state.mcqs[selectedGrade][selectedYear] = {};
      }

      if (!state.mcqs[selectedGrade][selectedYear][selectedCourse]) {
        state.mcqs[selectedGrade][selectedYear][selectedCourse] = [];
      }

      state.mcqs[selectedGrade][selectedYear][selectedCourse].push({
        question: state.question,
        optionsA: state.optionsA,
        optionsB: state.optionsB,
        optionsC: state.optionsC,
        optionsD: state.optionsD,
        ans: state.correctAnswer   // 🔥 IMPORTANT: use "ans"
      });

      localStorage.setItem("mcqs", JSON.stringify(state.mcqs));

      state.question = "";
      state.optionsA = "";
      state.optionsB = "";
      state.optionsC = "";
      state.optionsD = "";
      state.correctAnswer = "";
    }
  }
});

export const {
  setQuestion,
  setOptionsA,
  setOptionsB,
  setOptionsC,
  setOptionsD,
  setCorrectAnswer,
  setSelectedGrade,
  setSelectedYear,
  setSelectedCourse,
  setAddQuestion,
  setMcqs
} = mcqSlice.actions;

export default mcqSlice.reducer;
