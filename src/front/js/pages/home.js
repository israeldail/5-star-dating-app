import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { PlaceholderButton } from "react-bootstrap";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Hello Rigo!!</h1>
      <p>
        <img src={""} />
      </p>
      <div className="alert alert-info">
        {store.message ||
          "Loading message from the backend (make sure your python backend is running)..."}
      </div>
      <p>
        This boilerplate comes with lots of documentation:{" "}
        <a href="">Read documentation</a>
      </p>
    </div>
  );
};
