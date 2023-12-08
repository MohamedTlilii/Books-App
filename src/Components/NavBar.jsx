import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import React from "react";
import { NavLink,  useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  let session = localStorage.getItem("isLoggedIn");
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
      <Navbar bg="primary" data-bs-theme="dark">
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
              <NavLink style={({ isActive }) =>
                  isActive
                    ? activeStyle
                    : inactiveStyle
                }  to="/books">Books</NavLink>
            </Nav.Link>
            {session === "true" ? (
              <Nav.Link>
                <Nav.Link
                  onClick={() => {
                    localStorage.clear();
                    navigate("/");
                  }}
                >
                  Logout
                </Nav.Link>
              </Nav.Link>
            ) : (
              <>
                <Nav.Link>
                  <NavLink style={({ isActive }) =>
                  isActive
                    ?  activeStyle
                    : inactiveStyle
                } to="/login">Login</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink style={({ isActive }) =>
                  isActive
                  ? activeStyle
                  : inactiveStyle
                } to="/register">Register</NavLink>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
