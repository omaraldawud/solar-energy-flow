import React from 'react';
import { Nav } from 'react-bootstrap';

const MainNavigation: React.FC = () => {
  return (
    <Nav className="ms-auto">
      <Nav.Link href="#home" className="text-white px-3">Home</Nav.Link>
      <Nav.Link href="#residential" className="text-white px-3">Residential</Nav.Link>
      <Nav.Link href="#commercial" className="text-white px-3">Commercial</Nav.Link>
      <Nav.Link href="#services" className="text-white px-3">Services</Nav.Link>
      <Nav.Link href="#faqs" className="text-white px-3">FAQs</Nav.Link>
    </Nav>
  );
};

export default MainNavigation;
