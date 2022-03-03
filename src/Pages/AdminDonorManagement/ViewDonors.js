import React,{useState}from 'react';
import BasicTable from '../../components/BasicTable';
export default function ViewDonors({allDonors}) {

  const [tableColums,setColums]=useState(["id","name","address"])

  return (
      <React.Fragment>
        <h2>View Donor</h2>
        <BasicTable key={tableColums} Data={allDonors} clms={tableColums} pageS={4}></BasicTable>
      </React.Fragment>

  )
}
