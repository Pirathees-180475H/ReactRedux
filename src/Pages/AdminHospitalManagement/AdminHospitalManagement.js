import React from 'react';
import SubHeader from '../../components/SubHeader';
import ViewHospitals from './ViewHospitals';

//Import Reducer Tool Kit Componetns
import {useSelector} from "react-redux";
import AddHospital from './AddHospital';

function AdminHospitalManagement() {
  const allHospitals=useSelector((state)=>state.hospitals.value) //state indicates System's state=> state.name given in index.js Main component

  return (
      <React.Fragment>
          {console.log(allHospitals)}
            <SubHeader subHeaderTopics={["View All Hospitals","ADD Hospital"]}  subSystemName={"Hospital Management"}></SubHeader> 

            <ViewHospitals key={allHospitals} allHospitals={allHospitals}></ViewHospitals>

            <AddHospital></AddHospital>
    </React.Fragment>
    )
}

export default AdminHospitalManagement