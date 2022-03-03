import React from 'react'
import { Link, NavLink,useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

function Login() {
  let navigate=useNavigate();

  return (
    <div>
      <h1>Login</h1>
      <Button color='primary'  size='lg' onClick={()=>navigate("/register")} >Register</Button>
    </div>
  )
}

export default Login