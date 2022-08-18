import React from "react";
import couples from "../../img/couple.jpeg";
import { Link } from "react-router-dom";

export const IntroductionPage = () => {
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
              <button
                type="button"
                style={{
                  borderRadius: "5px",
                  background: "#D98B8B",
                  borderColor: "#D98B8B",
                  width: "7rem",
                }}
              >
                Male
              </button>
              <button
                type="button"
                style={{
                  borderRadius: "5px",
                  background: "#D98B8B",
                  borderColor: "#D98B8B",
                  width: "7rem",
                }}
              >
                Female
              </button>
            </div>
            <div id="genderButtonRight">
              <button
                type="button"
                style={{
                  borderRadius: "5px",
                  background: "#D98B8B",
                  borderColor: "#D98B8B",
                  width: "7rem",
                }}
              >
                Male
              </button>
              <button
                type="button"
                style={{
                  borderRadius: "5px",
                  background: "#D98B8B",
                  borderColor: "#D98B8B",
                  width: "7rem",
                }}
              >
                Female
              </button>
            </div>
          </div>
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
