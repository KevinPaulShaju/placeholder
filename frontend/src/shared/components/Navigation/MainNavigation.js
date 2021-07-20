import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import { AuthContext } from "../../context/auth-context";

import "./MainNavigation.css";
import { Navbar, Nav, Button } from "react-bootstrap";

const MainNavigation = (props) => {
  const auth = useContext(AuthContext);

  return (
    <Navbar
      bg="dark"
      fixed="top"
      className="p-2 d-flex justify-content-between"
      variant="dark"
      expand="md"
      collapseOnSelect
    >
      <Navbar.Brand>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          className="h1"
          to="/"
        >
          Placeholder
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto align-items-center">
          <Nav.Link as={NavLink} href="/" to="/">
            ALL USERS
          </Nav.Link>
          {auth.isLoggedIn && (
            <Nav.Link
              as={NavLink}
              href={`/${auth.userId}/places`}
              to={`/${auth.userId}/places`}
            >
              MY PLACES
            </Nav.Link>
          )}
          {auth.isLoggedIn && (
            <Nav.Link as={NavLink} href="/places/new" to="/places/new">
              ADD PLACE
            </Nav.Link>
          )}
          {auth.isLoggedIn && (
            <Nav.Link
              as={NavLink}
              href={`/users/${auth.userId}/profile`}
              to={`/users/${auth.userId}/profile`}
            >
              PROFILE
            </Nav.Link>
          )}
          {!auth.isLoggedIn && (
            <Nav.Link as={NavLink} href="/auth" to="/auth">
              AUTHENTICATE
            </Nav.Link>
          )}
          {auth.isLoggedIn && (
            <Nav.Link href="/">
              <Button variant="outline-danger" size="sm" onClick={auth.logout}>
                LOGOUT
              </Button>{" "}
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavigation;
