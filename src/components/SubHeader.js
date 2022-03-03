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

const subHeader = ({subSystemName,subHeaderTopics}) => {
    
  return (
    <div>
  <Navbar
    color="light"
    expand="md"
    light
  >
    <NavbarBrand href="/">
      {subSystemName}
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
            <NavLink href={`/component/`+subTopic}>
              {subTopic}
            </NavLink>
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