import React from 'react';
import BasicTable from '../../components/BasicTable';

export default function ViewHospitals({allHospitals}) {

    const tableColums=["id","hospitalName"]
  return (
    <React.Fragment>
    <h2>View Hospitals</h2>
    <BasicTable key={tableColums} Data={allHospitals} clms={tableColums} pageS={2}></BasicTable>
    </React.Fragment>
  )
}
