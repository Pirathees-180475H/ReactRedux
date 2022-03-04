import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'
import { Button ,ButtonGroup,FormGroup,Label,Input} from 'reactstrap'

function Login() {
  let navigate=useNavigate();

  const [userType,setUserType]=useState("Donor");
  const [userName,setUserName]=useState("");
  const [password,setPassword]=useState("");

  const changeHandler=(type,event)=>{
      console.log(type)
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

  return (
    <div className='container'>
      <div className='jumbotron'>
        <h2>Welcome to Blood Bank Management System</h2>  

          <div>
            <h1>{userType}-Login</h1>
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
      </div>
      <Button color='primary'  size='lg' onClick={()=>navigate("/register")} >Register</Button>
    </div>
  )
}

export default Login