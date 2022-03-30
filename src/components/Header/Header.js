import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-area">
      <Navbar bg="light" expand="lg">
        <Container>
          <Link
            className="text-capitalize fs-3 text-decoration-none text-warning"
            to="/"
          >
            crypto
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <CustomLink className="menu-items" to="/">
                Home
              </CustomLink>
              <CustomLink className="menu-items" to="/coins">
                coins
              </CustomLink>
              <CustomLink className="menu-items" to="/contact">
                contact
              </CustomLink>
              <CustomLink className="menu-items" to="/about">
                About
              </CustomLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
