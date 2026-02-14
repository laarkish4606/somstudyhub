import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [], // all added courses/years
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    addCourse: (state, action) => {
      state.courses.push(action.payload);
    },
    removeCourse: (state, action) => {
      state.courses = state.courses.filter(
        (course, index) => index !== action.payload
      );
    },
  },
});

export const { addCourse, removeCourse } = courseSlice.actions;
export default courseSlice.reducer;