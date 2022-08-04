import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { PlaceholderButton } from "react-bootstrap";
import { Navbar1 } from "../component/navbar.js";
import { Cards } from "../component/cards.js";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="body">
      
      <div id="cards" className="d-flex justify-content-evenly">
        <Cards/>
        
      </div>
    </div>
  );
};
