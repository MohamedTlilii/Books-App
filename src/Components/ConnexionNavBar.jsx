import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function ConnexionNavBar() {
  let activeStyle = {
    color :"red",
    backgroundColor: "white"
  };
  let inactiveStyle = {
    color :"white",
    backgroundColor: ""
  }
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>MY BOOK</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? activeStyle
                    : inactiveStyle
                }
                to="/"
              >
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? activeStyle
                    : inactiveStyle
                }
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? activeStyle
                    : inactiveStyle
                }
                to="/register"
              >
                Register
              </NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default ConnexionNavBar;
