import React ,{useState}from 'react'
import Header from '../components/Header';
import AdminDonorManagement from './AdminDonorManagement/AdminDonorManagement';
// More Components Like Admin Staff Management and more
import AdminHospitalManagement from './AdminHospitalManagement/AdminHospitalManagement';

function AdminMainPage() {
  const[adminHeaderTopics,setHeaderTopics]=useState(["Donor Management","Staff Management"])

  return (
    <React.Fragment>
      <Header userName={"PTS"} userType={"ADMIN"} headerTopics={adminHeaderTopics}></Header>
      <AdminDonorManagement/>
      
      <AdminHospitalManagement/>
    </React.Fragment>
  )
}

export default AdminMainPage