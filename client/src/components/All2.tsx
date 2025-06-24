import React from 'react';
import Hero from './Hero';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaPhone } from 'react-icons/fa';
import './Header.css';

const Home: React.FC = () => {
  return (
    <div className="app-container">
      <header className="sticky-top bg-tealgreen text-white py-2 shadow-sm w-100">
        <Container fluid>
          <Row className="align-items-center">

            {/* Logo & Title */}
            <Col xs={8} md={4} className="d-flex align-items-center">
              <img
                src="/images/SolarEnergyFlow-Logo.png"
                alt="Solar Energy Flow Logo"
                style={{ maxWidth: '120px' }}
                className="me-2"
              />
              <h1 className="fs-5 fw-bold d-none d-md-block" style={{
                background: 'linear-gradient(135deg, #316E62 0%, #FFC523 100%)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                textShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                Solar Energy Flow
              </h1>
            </Col>

            {/* Phone CTA */}
            <Col xs={4} md={3} className="d-flex justify-content-end align-items-center">
              <a href="tel:+16308008077" className="btn btn-warning text-dark fw-bold d-flex align-items-center px-3 py-2">
                <FaPhone size={18} className="me-2" />
                <span className="d-none d-md-block">+1 (630) 800-8077</span>
              </a>
            </Col>

            {/* Navigation */}
            <Col xs={12} md={5} className="mt-3 mt-md-0">
              <Navbar expand="lg" variant="dark" className="p-0" collapseOnSelect>
                <Container fluid className="p-0">
                  <Navbar.Toggle aria-controls="navbar-nav" className="ms-auto" />
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
            </Col>
          </Row>
        </Container>
      </header>

      {/* Hero Section */}
      <Hero
        title="Bright Ideas Start with Solar"
        subtitle1="Smart Energy:"
        subtitle2="For a Sustainable Future."
        description={
          <>
            We at <strong>Solar Energy Flow</strong> believe in making a difference 
            to our planet, one panel at a time. Join us as we journey to a better tomorrow.
          </>
        }
        imageUrl="/images/solar-panel/residential-solar-installation.jpg"
        imageAlt="Solar Ideas for Better Planet"
        formTitle="Want to Learn More? Contact Us"
        ctaButtonText="Contact Us Now"
      />
    </div>
  );
};

export default Home;
