import React from 'react';
import Hero from '../components/Hero';
import React from 'react';
import { Container, Row, Col, Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaPhone } from 'react-icons/fa';
import './Header.css'; // Custom styles here (if needed)

const Home: React.FC = () => {
  return (
    <div className="app-container">
      <div className="container-fluid p-0">

        

            <header className="sticky-top bg-tealgreen text-white py-3 shadow-sm">
              <Container fluid>
                <Row className="align-items-center">
                  {/* Logo and Brand */}
                  <Col xs={6} md={4} className="d-flex align-items-center">
                    <img
                      src="/images/SolarEnergyFlow-Logo.png"
                      alt="Solar Energy Flow Logo"
                      style={{ maxWidth: '150px' }}
                      className="me-2"
                    />
                    <h1 className="display-3 fw-bold text-gradient mb-4" 
                                style={{
                                  background: 'linear-gradient(135deg, #316E62 0%, #FFC523 100%)',
                                  WebkitBackgroundClip: 'text',
                                  backgroundClip: 'text',
                                  color: 'transparent',
                                  textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                  lineHeight: '1.2',
                                  letterSpacing: '-0.5px'
                        }}>
                      Solar Energy Flow
                    </h1>
                  </Col>
        
                  {/* Phone CTA */}
                  <Col xs={6} md={3} className="d-flex justify-content-center align-items-center">
                      <a 
                        href="tel:+16308008077" 
                        className="btn text-dark fw-bold d-flex align-items-center px-4 py-2 hover-grow"
                        style={{
                          background: 'linear-gradient(135deg, #ff8d29 0%, #FFD700 100%)',
                          border: 'none',
                          transition: 'all 0.3s ease',
                          fontSize: '1.1rem',
                          borderRadius: '15px 0 15px 0',  
                          letterSpacing: '2px'  
                        }}
                      >
                      <div className="phone-icon-wrapper bg-dark rounded-circle d-flex align-items-center justify-content-center me-3" 
                          style={{ 
                            width: '34px', 
                            height: '34px',
                            transition: 'transform 0.3s ease', 
                          }}>
                        <FaPhone size={18} className="text-warning" />
                      </div>
                      <span className="phone-number" style={{ letterSpacing: '1.2px' }}>
                        Join Us in Making <br />a Difference! <br />+1 (630) 800-8077
                      </span>
                    </a>
                  </Col>
        
                  {/* Navigation */}
                  <Col xs={12} md={4} className="d-flex justify-content-md-end justify-content-center mt-3 mt-md-0">
                     {/*<CallToActionBanner /> */ }
        
        
            <Navbar expand="lg"  variant="dark" className="py-1 py-md-3" collapseOnSelect>
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
        
        
                  </Col>
                </Row>
              </Container>
            </header>

        
        
        <Hero
          title="Bright Ideas Start with Solar"
          subtitle1="Smart Energy:"
          subtitle2="For a Sustainable Future."
          description={
            <>
              We at <strong>Solar Energy Flow</strong>, believe in making differnce 
              to our plant, one panel at a time.  Join us as we make our 
              journey to a better tomorrow
            </>
          }
          imageUrl="/images/solar-panel/residential-solar-installation.jpg"
          imageAlt='Solar Ideas for Better Planet'
          formTitle="Want to Learn More? Contact Us"
          ctaButtonText="Contact Us Now"
        />
        <SolarServices />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
