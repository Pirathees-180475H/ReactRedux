import React from 'react';
import BasicForm from '../../components/BasicADDForm';

function AddDonor({userData,AddDonor}) {

    const AddNewDonor=(user)=>{
        AddDonor(user);
    }
  return (
        <React.Fragment>
            <h2>AddDonor</h2>
            <BasicForm userData={userData} AddNewDonorX={AddNewDonor}></BasicForm>
        </React.Fragment>
  )
}

export default AddDonor