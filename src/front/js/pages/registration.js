import React from "react";

export const RegistrationPage = () => {
 
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
            <input className="input" name="email" type="text"  />
            <label className="label">Password</label>
            <input className="input" name="password" type="text" />
          </div>
          <button className="submit" >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
  };
export default RegistrationPage;
