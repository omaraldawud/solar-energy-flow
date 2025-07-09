import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import '../assets/css/navigation.css';

const MainNavigation: React.FC = () => {
  return (
      <Navbar expand="lg" variant="dark" className="p-0" collapseOnSelect>
                <Container fluid className="p-0">
                  <Navbar.Toggle aria-controls="navbar-nav" className="ms-auto" />
                  <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                      <Nav.Link href="/">Home</Nav.Link>
                      <NavDropdown title="Solar Services" id="services-dropdown">
                        <NavDropdown.Item href="#residential">Residential</NavDropdown.Item>
                        <NavDropdown.Item href="#commercial">Commercial</NavDropdown.Item>
                        <NavDropdown.Item href="#partners">Partners</NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown title="Contact" id="contact-dropdown">
                        <NavDropdown.Item href="/free-solar-system-design">Contact Us</NavDropdown.Item>
                        <NavDropdown.Item href="#about">About Us</NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
  );
};

export default MainNavigation;
