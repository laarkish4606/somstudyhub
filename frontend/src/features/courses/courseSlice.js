import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: JSON.parse(localStorage.getItem("courses")) || [],
  cource:"",
  courDes:"",
  yearType:"",
  grade:"",
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
   setCource :(state, action) => {
     state.cource = action.payload;
    },
    setCourDes :(state, action) => {
      state.courDes = action.payload;
     },
     setYear:(state, action) => {
      state.yearType = action.payload;
     },
      setGrades:(state, action) => {
      state.grade = action.payload;
     },
     addCource:(state)=>{
      state.courses.push({
        name:state.cource,
        description:state.courDes,
        year:state.yearType,
        grade:state.grade,
      });
    localStorage.setItem("courses", JSON.stringify(state.courses));
      state.cource = "";
      state.courDes = "";
      state.yearType = "";
      state.grade = "";
    
     }
  },
});

export const { setCourDes, setCource ,addCource,setGrades,setYear} = courseSlice.actions;
export default courseSlice.reducer;