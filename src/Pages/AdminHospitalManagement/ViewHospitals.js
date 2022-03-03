import React from 'react';
import BasicTable from '../../components/BasicTable';
import { useSelector } from 'react-redux';
import SubHeader from '../../components/SubHeader';
export default function ViewHospitals() {
    const allHospitals=useSelector((state)=>state.hospitals.value) //state indicates System's state=> state.name given in index.js Main component

    const tableColums=["id","hospitalName"]

  return (
    <React.Fragment>
    <SubHeader subHeaderTopics={["ViewHospitals","AddHospital"]}  subSystemName={"HospitalManagement"} mainSystem={"ADMINPage"}></SubHeader>
    <h2>View Hospitals</h2>
    <BasicTable key={tableColums} Data={allHospitals} clms={tableColums} pageS={2}></BasicTable>
    </React.Fragment>
  )
}
