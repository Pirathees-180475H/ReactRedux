import React from 'react'
import { Button ,ButtonGroup,FormGroup,Label,Input} from 'reactstrap'

import {useNavigate} from 'react-router-dom';

function WebSiteHome() {
    const navigate=useNavigate();

  return (
    <div className='container'>
        <div className='jumbotron'>
             <h1>WebSiteHome</h1>
        </div>
        <ButtonGroup>
            <Button onClick={()=>{navigate("/login")}}>
              Login
            </Button >

            <Button onClick={()=>{navigate("/register")}}>
             Register
            </Button>
            <Button onClick={()=>{navigate("/about")}}>
              About
            </Button>
          </ButtonGroup>
    </div>
  )
}

export default WebSiteHome