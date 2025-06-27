import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import '../assets/css/navigation.css';

const MainNavigation: React.FC = () => {
  return (
    <Navbar expand="lg" variant="dark" className="mt-5" collapseOnSelect>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Solar Services" id="services-dropdown">
              <NavDropdown.Item href="#residential">Residential</NavDropdown.Item>
              <NavDropdown.Item href="#commercial">Commercial</NavDropdown.Item>
              <NavDropdown.Item href="#partners">Partners</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Education" id="education-dropdown">
              <NavDropdown.Item href="#faqs">FAQs</NavDropdown.Item>
              <NavDropdown.Item href="#benefits">Benefits</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Contact" id="contact-dropdown">
              <NavDropdown.Item href="#contact">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="#about">About</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
