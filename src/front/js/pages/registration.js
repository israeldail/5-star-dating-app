import React from "react";

export const RegistrationPage = () => {
  state = {
    firstName,
    lastName: "",
    DOB: "",
    Height: "",
    Occupation: "",
  };
  handleChange = (e) => {
    const { input_field, value } = e.target;
    this.setState({ [input_field]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render = () => {
    return (
      <div clasName="hero">
        <div className="form-box">
          <div className="Button-box">
            <div id="button-color"></div>

            <button type="button" class="toggle-btn">
              Register
            </button>
          </div>

          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="input_field"
              placeholder="first Name, Last Name"
              required
              onChange={this.handleChange}
            />
            <input
              type="text"
              className="input_field"
              placeholder="DOB"
              required
              onChange={this.handleChange}
            />
            <input
              type="text"
              className="input_field"
              placeholder="Height"
              required
              onChange={this.handleChange}
            />
            <input
              type="text"
              className="input_field"
              placeholder="Occupation "
              required
              onChange={this.handleChange}
            />
            <button onSubmit={this.handleSubmit}> Log in </button>
          </form>
        </div>
      </div>
    );
  };
};
export default RegistrationPage;
