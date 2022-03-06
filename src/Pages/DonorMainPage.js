import React,{useState,useEffect} from 'react';
import {fireStoreDB} from '../backend/firebaseConfg';
import {collection,getDocs} from 'firebase/firestore';
import {auth} from '../backend/firebaseConfg';
import {onAuthStateChanged,signOut} from 'firebase/auth';
import{useDispatch}from "react-redux";
import {setDonorDetail} from './../Features/AuthDonorDetailsReducers';
import { Link,useNavigate } from 'react-router-dom';

function DonorMainPage() {
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const [donor,setDonor]= useState({}); //Set From On Auth State Changes
    const [donorDetails,setDonorDetailsLocal]=useState({});

    const donorCollectionRef=collection(fireStoreDB,"donors");

    //That Maintain Every time Like Use Effect, Like Log Out or Auth Variable Changes
    onAuthStateChanged(auth,(currentUser)=>{
        setDonor(currentUser);
    })

    //Get Authed User Data
    useEffect(()=>{
        const getData=async()=>{
            const data=await getDocs(donorCollectionRef);
            const donorDetailFromDB= data.docs.map((doc)=>({...doc.data(),id:doc.id})).filter(user=>(user.email===donor.email));
            dispatch(setDonorDetail(donorDetailFromDB[0])) //set To Redux To get In Other Componets
            setDonorDetailsLocal(donorDetailFromDB[0]); //set Directly To Main Donor Page Component
        }
       getData();
    },[donor,dispatch,donorCollectionRef]);



//Distroysession
const logOut=()=>{signOut(auth) ;navigate("/");}

  return (
    <div>
        <h1>DonorMainPage</h1>
        {donorDetails?<h2>Welcome {donorDetails.firstName}</h2>:null}

        <Link to="/DonorMainPage/Profile">Go to profile Page</Link>

        <button onClick={logOut}>logOut</button>
    </div>
  )
}

export default DonorMainPage