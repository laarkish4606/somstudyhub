import { createSlice } from "@reduxjs/toolkit";

const initialState={
    years: JSON.parse(localStorage.getItem("years")) || [],
    desc:"",
    year:"",
    grade:""
}
const YearSlice=createSlice({
    name:"year",
    initialState,
    reducers:{
     setYearLevel:(state,action)=>{
            state.year=action.payload;
        },
    setYearDesc:(state,action)=>{
            state.desc=action.payload;
            
    },
    setGrade:(state,action)=>{
        state.grade=action.payload;
    },
    addYear:(state)=>{
        state.years.push({
            year:state.year,
            desc:state.desc,
            grade:state.grade})
         localStorage.setItem("years", JSON.stringify(state.years));
        state.year="";
        state.desc="";
        state.grade="";
        
    }
    

    }
})
export const {setYearLevel,setYearDesc,addYear,setGrade}=YearSlice.actions;
export default YearSlice.reducer;