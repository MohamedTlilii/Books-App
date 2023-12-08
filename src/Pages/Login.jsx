import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [session, setSession] = useState(false);
  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", true);
    setTimeout(() => {
      setSession(true);
    }, 5000);
  };
  if (session) {
    navigate("/books");
  }
  return (
    <div className="page">
      <Form className="login-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Link to="/register">
            {" "}
            You dont have an account yet? Register now.
          </Link>
        </Form.Group>
        <Button
          onClick={() => {
            handleLogin();
          }}
          variant="primary"
          type="button"
        >
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
