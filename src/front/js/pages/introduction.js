import React, { useState, useContext } from "react";
import couples from "../../img/couple.jpeg";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const IntroductionPage = () => {
  const [maleGen, setMaleGen] = useState("")
  const [femaleGen, setFemaleGen] = useState("")
  const { store, actions } = useContext(Context);
  console.log(store, "Gender data")
  return (
    <div id="introduction">
      <img id="introductionPic" src={couples} />
      <div id="joinForm">
        <h1>Start Here</h1>
        <form>
          <div id="sex">
            <h3>I am:</h3>
       
            <h3>I am looking for:</h3>
          </div>
          <div id="sexButton">
            <div id="genderButtonLeft">
              <input
                type="radio"
                value="Male"
                name="radio"
                onChange={(e) => setMaleGen(e.target.value)}
                style={{
                  borderRadius: "5px",
                  background: "#D98B8B",
                  borderColor: "#D98B8B",
                  width: "7rem",
                }}
              />
              Male
              <input
                type="radio"
                value="Female"
                name="radio"
                onChange={(e) => setFemaleGen(e.target.value)}
                style={{
                  borderRadius: "5px",
                  background: "#D98B8B",
                  borderColor: "#D98B8B",
                  width: "7rem",
                }}
              />
              Female
            </div>
            <div id="genderButtonRight">
              <input
                type="radio"
                value="Male"
                name="radio"
                onChange={(e) => setMaleGen(e.target.value)}
                style={{
                  borderRadius: "5px",
                  background: "#D98B8B",
                  borderColor: "#D98B8B",
                  width: "7rem",
                }}
              />

              Male

                Male

              <input
                type="radio"
                value="Female"
                name="radio"
                onChange={(e) => setFemaleGen(e.target.value)}
                style={{
                  borderRadius: "5px",
                  background: "#D98B8B",
                  borderColor: "#D98B8B",
                  width: "7rem",
                }}
              />

              Female

                Female

            </div>
          </div>
          <button onClick={() => {
            fetch(process.env.BACKEND_URL + "/api/gender", {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify({maleGen, femaleGen})
            })
          }}>Save</button>
          <div id="joinSection">
            <Link to={"/registration"}>
              <button
                id="joinButton"
                type="button"
                style={{
                  borderRadius: "5px",
                  background: "#D98B8B",
                  borderColor: "#D98B8B",
                  width: "7rem",
                }}
              >
                Join Now!
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
