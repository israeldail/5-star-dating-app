import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  console.log("this is your token,", token);
  const { store, actions } = useContext(Context);

  const handleSubmit = () => {
    actions.login(email, password).then(() => {
      actions.profile();
    });
  };

  if (token && token != "" && token != undefined) navigate("/");

  return (
    <div className="login-page">
      {token && token != "" && token != undefined ? (
        "You are logged in with this token."
      ) : (
        <Form className="login-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
          <Link to="/introduction">
          <Button id="backtobutton" variant="primary">
            Back to Introduction
          </Button>
          </Link>

        </Form>
      )}
    </div>
  );
};
