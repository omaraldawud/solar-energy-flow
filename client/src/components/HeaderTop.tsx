import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaPhone } from 'react-icons/fa';
import MainNavigation from './MainNavigation';
import './Header.css'; // Custom styles here (if needed)
import CallToActionBanner from './CallToActionBanner';

const Header: React.FC = () => {
  return (
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
                  background: 'linear-gradient(135deg, #FFC523 0%, #FFD700 100%)',
                  border: 'none',
                  transition: 'all 0.3s ease',
                  fontSize: '1.1rem',
                  borderRadius: '8px', // Less pill-like than rounded-pill
                  letterSpacing: '2px' // Increased letter spacing
                }}
              >
              <div className="phone-icon-wrapper bg-dark rounded-circle d-flex align-items-center justify-content-center me-3" 
                  style={{ 
                    width: '34px', 
                    height: '34px',
                    transition: 'transform 0.3s ease' 
                  }}>
                <FaPhone size={18} className="text-warning" />
              </div>
              <span className="phone-number" style={{ letterSpacing: '1.2px' }}>
                +1 (630) 800-8077
              </span>
            </a>
          </Col>

          {/* Navigation */}
          <Col xs={12} md={4} className="d-flex justify-content-md-end justify-content-center mt-3 mt-md-0">
              <CallToActionBanner />
              <MainNavigation />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
