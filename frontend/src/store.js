import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./features/courses/courseSlice.js";
import yearReducer from "./features/courses/yearsSlice.js";

export const store = configureStore({
  reducer: {
    course: courseReducer,
    year:yearReducer,
  },
});

