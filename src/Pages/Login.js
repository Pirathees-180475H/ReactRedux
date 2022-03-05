import React, { useState,useEffect } from 'react'
import {useNavigate,Redirect} from 'react-router-dom'
import { Button,FormGroup,Label,Input} from 'reactstrap';
import { createUserWithEmailAndPassword ,onAuthStateChanged,signOut,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../backend/firebaseConfg";


function Login() {
  let navigate=useNavigate();

  const [userName,setUserName]=useState("");
  const [password,setPassword]=useState("");

  const [user,setUser] =useState({});
  const [isError,setIsError]=useState(false);
  const [errorMsg,setErrorMsg]=useState("");

  const [userDetails,setUserDetails]= useState("Donor") //Get From FireStore



  const Login=async()=>{
    try{
      const userAuth=await  signInWithEmailAndPassword(auth,userName,password);
      setIsError(false);
    }catch(e){
      setIsError(true);
      setErrorMsg(e.message);
      signOut(auth)
    }
  }

//Like Use Effect ,That Maintain Every time, Like Log Out or Auth Variable Changes
onAuthStateChanged(auth,(currentUser)=>{
  setUser(currentUser);
})

  const changeHandler=(type,event)=>{
      switch(type){
        case "userName":{
          setUserName(event.target.value)
          break;
        }
        case "password":{
          setPassword(event.target.value)
          break;
        }
      }
  }

  //Like Component Did Update For User Component
  useEffect(()=>{
      if(user?.email && userDetails=="Donor"){ navigate('/DonorMainPage')}
      if(user?.email && userDetails=="Hospital"){ navigate('/HospitalMainPage')}

  },[user])


  return (
  
    <div className='container'>
      <div className='jumbotron'>
        <h2>Welcome to Blood Bank Management System</h2>  
          <div>
            <h1>Login</h1>
            <FormGroup>
                    <Label for="userName">
                        User Name
                    </Label>
                    <Input  value={userName} onChange={(e)=>changeHandler("userName",e)} />
                    
              </FormGroup>

              <FormGroup>
                    <Label for="Id">
                       Password
                    </Label>
                    <Input type='password' value={password} onChange={(e)=>changeHandler("password",e)} />
                    
              </FormGroup>

          </div>

          <Button color='warning'  size='lg' onClick={Login} >Login</Button>

          {user?.email ? <h3 className='successTxt'>Welcome user {user.email}</h3>:null}

          {isError ? <h3 className='errorTxt'>{errorMsg}</h3>:null}

      </div>
      <Button color='primary'  size='lg' onClick={()=>navigate("/register")} >Register</Button>
    </div>
  )
}

export default Login