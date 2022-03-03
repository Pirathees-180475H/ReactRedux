import React ,{useState}from 'react'
import Header from '../components/Header';
import AdminDonorManagement from './AdminDonorManagement/AdminDonorManagement';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
// More Components Like Admin Staff Management and more
import AdminHospitalManagement from './AdminHospitalManagement/AdminHospitalManagement';

function AdminMainPage() {
  const[adminHeaderTopics,setHeaderTopics]=useState(["DonorManagement","HospitalManagement"])

  return (
    <React.Fragment>
      <Header userName={"PTS"} userType={"ADMIN"} headerTopics={adminHeaderTopics}></Header>
       <h1>ADMIN HOME PAGE</h1>
       <h3>It is the Place Where Main Content Side Bar and Header Reside</h3>  
    </React.Fragment>
  )
}

export default AdminMainPage