import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const RegistrationPage = () => {
  const { store, actions } = useContext(Context);
  const handleFormSubmit = (event) => {
		event.preventDefault();
		actions.signup(email,password,firstName,lastName,bio,age);
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [age, setAge] = useState("");

  return (
    <div className="text-center mt-5">
      <h1>Sign Up</h1>
      <div className="container">
        <div>
          <h2 className="title">Create Account</h2>
        </div>
        <form className="form-wrapper">
          <div className="email d-flex flex-column">
            <label className="label">E-MAIL</label>
            <input value={email} className="input" name="email" type="text" onChange={(e) => setEmail(e.target.value)} />
            <label className="label">Password</label>
            <input value={password} className="input" name="password" type="password" onChange={(e) => setPassword(e.target.value)} />
            <label className="label">First Name</label>
            <input value={firstName} className="input" name="firstName" type="text" onChange={(e) => setFirstName(e.target.value)} />
            <label className="label">Last Name</label>
            <input value={lastName} className="input" name="lastName" type="text" onChange={(e) => setLastName(e.target.value)} />
            <label className="label">Bio</label>
            <input value={bio} className="input" name="bio" type="text" onChange={(e) => setBio(e.target.value)} />
            <label className="label">Age</label>
            <input value={age} className="input" name="age" type="text" onChange={(e) => setAge(e.target.value)} />
          </div>
          <button className="submit" onClick={handleFormSubmit}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
