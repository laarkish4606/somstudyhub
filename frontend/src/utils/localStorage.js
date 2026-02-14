// Load state from localStorage
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("coursesState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Save state to localStorage
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("coursesState", serializedState);
  } catch (err) {
    console.log("Could not save state", err);
  }
};