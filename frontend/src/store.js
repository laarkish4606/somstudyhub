import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./features/courses/courseSlice.js";
import { loadState, saveState } from "./utils/localStorage.js";


const persistedState = loadState();

export const store = configureStore({
  reducer: {
    course: courseReducer,
  },
  preloadedState: persistedState, // 🔥 load saved data
});

// 🔥 Subscribe to store changes
store.subscribe(() => {
  saveState({
    course: store.getState().course,
  });
});