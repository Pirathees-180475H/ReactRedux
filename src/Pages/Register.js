import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Button ,ButtonGroup,FormGroup,Label,Input} from 'reactstrap'
import { createUserWithEmailAndPassword ,onAuthStateChanged,signOut} from "firebase/auth";
import { auth } from "../backend/firebaseConfg";

function Register() {

  let navigate=useNavigate();

  const [userType,setUserType]=useState("Donor");
  const [userName,setUserName]=useState("");
  const [password,setPassword]=useState("");

  const [user,setUser]=useState({});
  const [errorInRegister,setError]=useState(false);
  const [errrorMessage,setErrorMessage]= useState("");

//Function For Register
  const Register=async(registeredEmail,registeredPassword)=>{
    try{
        const user= await createUserWithEmailAndPassword(auth,registeredEmail,registeredPassword);
        setError(false);
        setUserName("");setPassword("");

    }catch(error){
       setError(true);
       setErrorMessage(error.message);
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

//Distroysession
const logOut=()=>{
  signOut(auth)
}
  return (
    <div className='container'>
      <div className='jumbotron'>
        <h2>Welcome to Blood Bank Management System</h2>  

          <div>
            <h1>{userType}-Register</h1>
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
         

         <ButtonGroup>
            <Button onClick={()=>{setUserType("Donor")}}>
              Donor
            </Button >

            <Button onClick={()=>{setUserType("Hospital")}}>
              Hospital
            </Button>
            <Button onClick={()=>{setUserType("Admin")}}>
              Admin
            </Button>
          </ButtonGroup>
          <br></br><br></br>
          <button className='btn btn-success'  size='lg' onClick={()=>Register(userName,password)} >REGISTER</button>

          {user !=null ?<h3 className='successTxt'> Welcome user {user.email}, Please Login </h3> :null }

          {errorInRegister?  <h5 className='errorTxt' >{errrorMessage}</h5>:null}
        
      </div>
      <Button color='primary'  size='lg' onClick={()=>navigate("/login")} >Login</Button>

      <Button color='primary'  size='lg' onClick={logOut} >Log Out</Button>

    </div>
  )
}

export default Register