import React from 'react'
import ReusableAddForm from '../../components/ReusableAddForm';
import {addHospital} from '../../Features/HospitalsReducers';
import{useDispatch,useSelector}from "react-redux";
import SubHeader from '../../components/SubHeader';

function AddHospital() {

  const allHospitals=useSelector((state)=>state.hospitals.value) //state indicates System's state=> state.name given in index.js Main component

  const dispatch=useDispatch();

  const addHospitalData =(newHospitaldata)=>{
        dispatch(addHospital(newHospitaldata));
  }

  return (
    <React.Fragment>
        <SubHeader subHeaderTopics={["ViewHospitals","AddHospital"]}  subSystemName={"HospitalManagement"} mainSystem={"ADMINPage"}></SubHeader>
        <ReusableAddForm addData={addHospitalData} formFor={"Hospital"}  data={allHospitals}/>
    </React.Fragment>

  )
}

export default AddHospital