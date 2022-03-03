import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,NavbarText,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import { Link } from "react-router-dom";

const subHeader = ({mainSystem,subSystemName,subHeaderTopics}) => {
    
  return (
    <div>
  <Navbar
    color="light"
    expand="md"
    light
  >
    <NavbarBrand>
      <Link to={`/${mainSystem}/${subSystemName}`}>  {subSystemName}</Link>
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        {subHeaderTopics.map(subTopic=>{
          return(
            <NavItem key={subTopic}>
              <Link to={`/${mainSystem}/${subSystemName}/${subTopic}`}>{`${subTopic}..`}</Link>
            </NavItem>
          )
        })}
     
      
      </Nav>
    </Collapse>
  </Navbar>
</div>
  );
};

export default subHeader;