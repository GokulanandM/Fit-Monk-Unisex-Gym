import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  // Updated import
import logo from "../../assets/Fitmonk.png";
import '../Css/Header.css';

const ResponsiveHeader = () => {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar" >
      <Container>
        <Navbar.Brand className="brand-logo" onClick={() => navigate("/")}>
          <img
            src={logo}
            alt="Logo"
            className="logo-image"
            onClick={() => navigate("/")}
            style={{ cursor: 'pointer', width:"200%"}} 
          />
          FitMonk Unisex Gym
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="nav-links">
            <Nav.Link href='/' className="nav-link-custom">Home</Nav.Link>
            <Nav.Link href='/aboutUs'  className="nav-link-custom">About</Nav.Link>
            <Nav.Link href='/services'  className="nav-link-custom">Services</Nav.Link>
            <Nav.Link href='/contactUs'  className="nav-link-custom">Contact</Nav.Link>
            <Nav.Link href='/gallery' className="nav-link-custom">Gallery</Nav.Link>
            <Nav.Link href='/medals' className="nav-link-custom">Medals</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ResponsiveHeader;
