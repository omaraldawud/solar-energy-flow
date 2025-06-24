import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaPhone } from 'react-icons/fa';
import MainNavigation from './MainNavigation';
import './Header.css'; // Custom styles here (if needed)
import CallToActionBanner from './CallToActionBanner';

const Header: React.FC = () => {
  return (
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
                <FaPhone size={18} color="white" className="me-2" />
                <span className="d-none d-md-block">Join Us in Making <br />a Difference! <br />+1 (630) 800-8077</span>
              </a>
            </Col>

            {/* Navigation */}
            <Col xs={12} md={5} className="mt-3 mt-md-0">
              <MainNavigation />
            </Col>
          </Row>
        </Container>
      </header>
  );
};

export default Header;
