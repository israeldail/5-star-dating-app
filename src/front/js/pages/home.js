import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { PlaceholderButton } from "react-bootstrap";
import { Navbar1 } from "../component/navbar.js";
import { Cards } from "../component/cards.js";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  if(!token) navigate('/introduction')
  return (
    <div className="body">
      
      <div id="cards" className="d-flex justify-content-evenly">
        <Cards/>
        
      </div>
    </div>
  );
};
