import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import '../css/navigation.css';

const MainNavigation: React.FC = () => {
  return (
    <Nav className="ms-auto align-items-center">
      <Nav.Link href="#home" className="text-white px-1">Home</Nav.Link>

      {/* Solar Services Dropdown */}
      <NavDropdown 
        title="Solar Services" 
        id="solar-services-dropdown" 
        className="custom-dropdown text-white px-1"
        menuVariant="dark" // Bootstrap 5: dark dropdown menu
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

            <NavDropdown 
        title="Contact" 
        id="solar-education-dropdown" 
        className="custom-dropdown text-white px-1"
        menuVariant="dark"
      >
        <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
        <NavDropdown.Item href="#solar-maintenance">About Us</NavDropdown.Item>
        <NavDropdown.Item href="#solar-benefits">Partner with Us</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="" className="text-white px-1"></Nav.Link>
    </Nav>
  );
};

export default MainNavigation;
