import React from 'react';
import SubHeader from '../../components/SubHeader';
import ViewHospitals from './ViewHospitals';

//Import Reducer Tool Kit Componetns
import {useSelector} from "react-redux";
import AddHospital from './AddHospital';

//Import Router
import{BrowserRouter as Router , Routes, Route,Link} from 'react-router-dom';
import { Form } from 'reactstrap';

function AdminHospitalManagement() {
  const allHospitals=useSelector((state)=>state.hospitals.value) //state indicates System's state=> state.name given in index.js Main component

  return (
      <React.Fragment>
            <SubHeader subHeaderTopics={["ViewHospitals","AddHospital"]}  subSystemName={"HospitalManagement"} mainSystem={"ADMINPage"}></SubHeader> 
             <h3>
                 Hospital Management Sub System IN Admin Management
             </h3>
        
    </React.Fragment>
    )
}

export default AdminHospitalManagement