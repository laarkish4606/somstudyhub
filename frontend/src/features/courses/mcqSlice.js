import { createSlice } from "@reduxjs/toolkit";

const initialState={
    mcqs:JSON.parse(localStorage.getItem("mcqs")) || [],
    question:"",
    optionsA:"",
    optionsB:"",
    optionsC:"",
    optionsD:"",
    correctAnswer:"",
    
}; 
const mcqSlice=createSlice({
    name:"mcq",
    initialState,
    reducers:{ 
        setQuestion:(state,action)=>{
            state.question=action.payload;
        },
        setOptionsA:(state,action)=>{
            state.optionsA=action.payload;
        },
        setOptionsB:(state,action)=>{
            state.optionsB=action.payload;
        },
        setOptionsC:(state,action)=>{
            state.optionsC=action.payload;
        },
        setOptionsD:(state,action)=>{
            state.optionsD=action.payload;
        },
        setCorrectAnswer:(state,action)=>{
            state.correctAnswer=action.payload;
        },
        setAddQuestion:(state)=>{
            state.mcqs.push({
                question:state.question,
                optionsA:state.optionsA,
                optionsB:state.optionsB,
                optionsC:state.optionsC,
                optionsD:state.optionsD,
                correctAnswer:state.correctAnswer,
            });
            localStorage.setItem("mcqs",JSON.stringify(state.mcqs));
            state.question="";
            state.optionsA="";
            state.optionsB="";
            state.optionsC="";
            state.optionsD="";
            state.correctAnswer="";
            
        }
       
    }
});

export const {setQuestion,setOptionsA,setOptionsB,setOptionsC,setOptionsD,setCorrectAnswer,setAddQuestion}=mcqSlice.actions;
export default mcqSlice.reducer;


