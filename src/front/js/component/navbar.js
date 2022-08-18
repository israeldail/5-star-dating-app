import React, { useEffect, useContext, useState, Profiler } from "react";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar1 = () => {
  const { store, actions } = useContext(Context);

  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/inbox", { replace: true });
  };

  const handleClick2 = () => {
    navigate("/login");
  };

  return (
    <Navbar
      bg="light"
      expand="lg"
      className="navbar"
      style={{ height: "100px" }}
    >
      <Container fluid style={{ background: "#D98B8B" }}>
        <div className="container">
          <Navbar.Brand
            style={{ color: "black", fontSize: 50, justify: "center" }}
          >
            <img
              src={logo}
              height="100"
              width="200"
              style={{ marginLeft: "85px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
        </div>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            id="nav"
          >
            {token && (
              <div id="inboxButton">
                <div id="userName">Welcome, {store.profile.first_name} {store.profile.last_name}</div>
                <i
                  onClick={handleClick}
                  className="fa-solid fa-envelope fa-2xl"
                ></i>
              </div>
            )}
            {!token ? (
              <div id="loginButton">
                <i
                  className="fa-solid fa-right-to-bracket fa-2xl"
                  onClick={handleClick2}
                ></i>
              </div>
            ) : (
              <div id="logoutButton">
                <i
                  className="fa-solid fa-right-from-bracket fa-2xl"
                  onClick={() => {
                    actions.logout();
                    handleClick2();
                  }}
                ></i>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
