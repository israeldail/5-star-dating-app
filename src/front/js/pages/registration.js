import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import couple1 from "../../img/couple1.png";
import couple2 from "../../img/couple2.png";
import { useNavigate } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const RegistrationPage = () => {
  const { store, actions } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (
      email == "" ||
      password == "" ||
      firstName == "" ||
      lastName == "" ||
      bio == "" ||
      age == ""
    ) {
      alert("Save fields cannot be blank");
    } else {
      actions.signup(email, password, firstName, lastName, bio, age);
      navigate("/login");
    }
  };
  return (
    <div>
      <h1>Sign Up</h1>
      Gender:      <div>GENDER: {store.gender.map((item, index)=> {
              return (
                <div key={index}>{item.gen || item.genTwo}</div>
              )
            })}</div>
      <div className="mainintro">
        <div className="introPic1">
          <img id="introPic1" src={couple1} height="1000" />
        </div>
        <div className="introPic2">
          <img id="introPic2" src={couple2} height="1000" />
        </div>
      </div>
      <div className="signupcontainer">
        <div>
          <h2 className="title">Create Account</h2>
        </div>
        <form className="form-wrapper">
          <div className="email d-flex flex-column">
            <label className="label">E-MAIL</label>
            <input
              value={email}
              className="input"
              name="email"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="label">Password</label>
            <input
              value={password}
              className="input"
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="label">First Name</label>
            <input
              value={firstName}
              className="input"
              name="firstName"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label className="label">Last Name</label>
            <input
              value={lastName}
              className="input"
              name="lastName"
              type="text"
              onChange={(e) => setLastName(e.target.value)}
            />
            <label className="label">Bio</label>
            <input
              value={bio}
              className="input"
              name="bio"
              type="text"
              onChange={(e) => setBio(e.target.value)}
            />
            <label className="label">Age</label>
            <input
              value={age}
              className="input"
              name="age"
              type="text"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button className="submit" onClick={handleFormSubmit}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
