import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../../assets/css/navigation.css';

const MainNavigation: React.FC = () => {
  return (
    <Navbar expand="lg" variant="dark" className="p-0" collapseOnSelect>
      <Container fluid className="p-0">
        {/* 🔧 Toggle button for mobile (hamburger icon) */}
        <Navbar.Toggle aria-controls="main-navbar" />

        {/* 🔧 Collapsible nav links */}
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto navbar small">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/solar-energy-services">Services</Nav.Link>
            <Nav.Link href="/about-us">About Us</Nav.Link>
            <Nav.Link href="/free-solar-system-design">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
