import React, { useEffect, useContext, useState} from "react";
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

export const Navbar1 = () => {
  const location = useLocation();
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = sessionStorage.getItem("token");
  const navigate =  useNavigate();
  console.log('this is your token', token)

  const handleClick = () => {
	actions.login(email, password);
  if(token && token != "" && token != undefined) navigate('/')
  };

  // const handleLogout = () => {
  //   actions.logout();
  //   if(token && token != "" && token != undefined) navigate('/introduction')
  // }

  

  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Container fluid style={{ background: "#D98B8B" }}>
        <div className="container">
          <Navbar.Brand
            style={{ color: "black", fontSize: 50, justify: "center" }}
          >
            <span className="logo">Social Dating</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
        </div>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Button id="navButton" href="#action1" onClick={handleClick}>
              {location.pathname === "/introduction" || location.pathname === "/registration" ? "Login" : "Inbox"}
            </Button>
            {/* <button onClick={handleLogout}>logout</button> */}
            
              <form id="emailandpass">
                <label style={{ marginLeft: "2rem" }}></label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="e-mail"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <label style={{ marginLeft: "2rem" }}></label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
