import React from 'react'
import ReusableAddForm from '../../components/ReusableAddForm';
import {addHospital} from '../../Features/HospitalsReducers';
import{useDispatch, UseDispatch}from "react-redux";

function AddHospital() {
  const dispatch=useDispatch();

  const fields=["Hospital ID","Hospital Name"]

  const addHospitalData =(newHospitaldata)=>{
        dispatch(addHospital(newHospitaldata));
  }

  return (

   <ReusableAddForm addData={addHospitalData} fields={fields} />

  )
}

export default AddHospital