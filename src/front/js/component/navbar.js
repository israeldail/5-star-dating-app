import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export const Navbar1 = () => {
  const location = useLocation();

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
            <Button id="navButton" href="#action1">
              {location.pathname === "/introduction" || location.pathname === "/registration" ? "Login" : "Inbox"}
            </Button>
            
              <form id="emailandpass">
                <label style={{ marginLeft: "2rem" }} for="email"></label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="e-mail"
                ></input>
                <label style={{ marginLeft: "2rem" }} for="password"></label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  placeholder="password"
                ></input>
              </form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
