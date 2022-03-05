import { createSlice } from "@reduxjs/toolkit";


export const authDonorDetailSlice= createSlice({
    name:"donorDetails", //state Name
    initialState:{value:{"name":"Donor"}},  //Initail State
    reducers:{                           //Set of Functions Like Add,Remove,Etc
        addDonorDetail:(state,action)=>{
         //   state.value.push(action.payload)//Add Hospital Reducer, in Here state means current state,Action that change in state
        },
        setDonorDetail:(state,action)=>{
              state.value=action.payload;
        }                                                          
    }
})

export const {addDonorDetail,setDonorDetail} =authDonorDetailSlice.actions;//Import All Actions to All Components

export default authDonorDetailSlice.reducer; // Import All Reducers To index.js