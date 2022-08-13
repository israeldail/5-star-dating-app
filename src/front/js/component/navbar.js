import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../img/new_logo.png";

export const Navbar1 = () => {
  const { store, actions } = useContext(Context);
  

  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  

  const handleClick = () => {
    navigate("/login", { replace: true });
    
  };

  const handleClick2 = () => {
    navigate("/login")
  }

  // const handleLogout = () => {
  //   actions.logout();
  //   if(token && token != "" && token != undefined) navigate('/introduction')
  // }

  return (
    <Navbar bg="light" expand="lg" className="navbar" style={{height:"100px"}}>
      <Container fluid style={{ background: "#D98B8B" }}>
        <div className="container">
          <Navbar.Brand
            style={{ color: "black", fontSize: 50, justify: "center" }}
          >
            
            <img src={logo} height="100" width="200" style={{marginLeft:"85px"}}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
        </div>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {token && (
              <Button id="navButton" href="#action1" onClick={handleClick}>
                Inbox
              </Button>
            )}
            { !token ?
              <Button id="navButton" href="#action1" onClick={handleClick}>
                Login
              </Button>
              :
              <Button id="navButton" href="#action1" onClick={() => {actions.logout(); handleClick2();}}>Logout</Button>
                
            }  
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
