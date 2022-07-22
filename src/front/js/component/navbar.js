import React from "react";
import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";

export const Navbar1 = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid style={{ background: "purple" }}>
        <div className="container">
          <Navbar.Brand
            style={{ color: "black", fontSize: 50, justify: "center" }}
          >
            Navbar scroll
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
        </div>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">login</Nav.Link>

            <NavDropdown title="Signup" styleid="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
