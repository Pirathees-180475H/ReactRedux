import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,NavbarText,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Topbar = ({userName,userType,headerTopics}) => {

  const [navTopics,setTopics]= useState(headerTopics);
    
  return (
    <div>
  <Navbar
    color="primary"
    expand="md"
    light
  >
    <NavbarBrand href="/">
      Home
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        {navTopics.map(topic=>{
          return(
          <NavItem key={topic}>
            <NavLink>           
               <Link to={`/${userType}Page/${topic}`}>{topic}</Link>
            </NavLink>
          </NavItem>
          )
        })}
       
      </Nav>
      <NavbarText>
        {userName} {userType}
      </NavbarText>
    </Collapse>
  </Navbar>
</div>
  );
};

export default Topbar;