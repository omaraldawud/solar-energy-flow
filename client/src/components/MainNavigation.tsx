import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import '../assets/css/navigation.css';

const MainNavigation: React.FC = () => {
  return (
      <Navbar expand="lg" variant="dark" className="p-0" collapseOnSelect>
                <Container fluid className="p-0">
                  <Navbar.Toggle aria-controls="navbar-nav" className="ms-auto" />
                    <Nav className="ms-auto">
                      <Nav.Link href="/">Home</Nav.Link>
                      <Nav.Link href="/#solar-services">Services</Nav.Link>
                      <Nav.Link href="/about-us">About Us</Nav.Link>
                      <Nav.Link href="/free-solar-system-design">Contact Us</Nav.Link>
                    </Nav>
                </Container>
              </Navbar>
  );
};

export default MainNavigation;
