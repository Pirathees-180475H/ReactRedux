import { createSlice } from "@reduxjs/toolkit";
import { HospitalData } from "../FakeData/HospitalData";

export const hospitalsSlice= createSlice({
    name:"hospitals", //state Name
    initialState:{value:HospitalData},   //Initail State
    reducers:{                           //Set of Functions Like Add,Remove,Etc
        addHospital:(state,action)=>{
            state.value.push(action.payload)//Add Hospital Reducer, in Here state means current state,Action that change in state
        }                                                              
    }
})

export const {addHospital} =hospitalsSlice.actions;       //Import All Actions to All Components

export default hospitalsSlice.reducer; // Import All Reducers To index.js