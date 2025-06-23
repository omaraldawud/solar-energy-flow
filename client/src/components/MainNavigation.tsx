import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import '../../css/navigation.css';

const MainNavigation: React.FC = () => {
  return (
    <Navbar expand="md" bg="dark" variant="dark" className="py-3" collapseOnSelect>
      <Container>
        {/* Hamburger icon */}
        <Navbar.Toggle aria-controls="main-navbar-nav" className="ms-auto" />

        {/* Collapsible menu */}
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto align-items-left">
            <Nav.Link href="#home" className="text-white px-1">Home</Nav.Link>

            {/* Solar Services Dropdown */}
            <NavDropdown 
              title="Solar Services" 
              id="solar-services-dropdown" 
              className="custom-dropdown text-white px-1"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#residential">Residential</NavDropdown.Item>
              <NavDropdown.Item href="#commercial">Commercial Solar Energy</NavDropdown.Item>
              <NavDropdown.Item href="#partners">Solar Partners</NavDropdown.Item>
            </NavDropdown>

            {/* Solar Education Dropdown */}
            <NavDropdown 
              title="Solar Education" 
              id="solar-education-dropdown" 
              className="custom-dropdown text-white px-1"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#faqs">FAQs</NavDropdown.Item>
              <NavDropdown.Item href="#solar-benefits">Benefits of Solar</NavDropdown.Item>
              <NavDropdown.Item href="#solar-installation">Installation Process</NavDropdown.Item>
              <NavDropdown.Item href="#solar-maintenance">Maintenance Tips</NavDropdown.Item>
            </NavDropdown>

            {/* Contact Dropdown */}
            <NavDropdown 
              title="Contact" 
              id="contact-dropdown" 
              className="custom-dropdown text-white px-1"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
              <NavDropdown.Item href="#about">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#partners">Partner with Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
