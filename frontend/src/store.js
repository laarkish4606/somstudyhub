import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./features/courses/courseSlice.js";
import yearReducer from "./features/courses/yearsSlice.js";
import mcqReducer from "./features/courses/mcqSlice.js"

export const store = configureStore({
  reducer: {
    course: courseReducer,
    year:yearReducer,
    mcq:mcqReducer,
  },
});

