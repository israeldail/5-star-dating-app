import React from "react";

export const RegistrationPage = () => {
  return (
    <div clasName="hero">
      <div className="form-box">
        <div className="Button-box">
          <div id="button-color"></div>

          <button type="button" class="toggle-btn">
            Register
          </button>
        </div>
        <div className="IconButton">
          <img src=""></img>
          <img src=""></img>
          <img src=""></img>
        </div>
        <form className="input-group">
          <input
            type="text"
            className="input-field"
            placeholder="first Name, Last Name"
            required
          ></input>
          <input
            type="text"
            className="input-field"
            placeholder="DOB"
            required
          ></input>
          <input
            type="text"
            className="input-field"
            placeholder="Height"
            required
          ></input>
          <input
            type="text"
            className="input-field"
            placeholder="Occupation "
            required
          ></input>
          <input
            type="text"
            className="input-field"
            placeholder="Do you have any kids 
            button"
            required
          ></input>
        </form>
      </div>
    </div>
  );
};
