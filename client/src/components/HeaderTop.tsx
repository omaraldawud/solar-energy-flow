import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone } from 'react-icons/fa';
import MainNavigation from './MainNavigation';

const Header: React.FC = () => {
  return (
    <header className="sticky-top bg-dark text-white py-3 shadow-sm">
      <Container fluid>
        <Row className="align-items-center">
          {/* Logo */}
          <Col xs={6} md={4} className="d-flex align-items-center">
            <img
              src="/images/SolarEnergyFlow-Logo.png"
              alt="Solar Energy Flow Logo"
              style={{ maxWidth: '50px' }}
              className="me-2"
            />
            <span className="fs-4 fw-bold" style={{ color: '#F7CA4D' }}>
              Solar Energy Flow
            </span>
          </Col>

          {/* Phone Number */}
          <Col xs={6} md={4} className="d-flex justify-content-center align-items-center">
            <FaPhone size={20} className="me-2" color="#F7CA4D" />
            <a href="tel:+16308008077" className="text-white text-decoration-none fs-5">
              +1 630 800 8077
            </a>
          </Col>

          {/* Navigation */}
          <Col xs={12} md={4} className="d-flex justify-content-md-end justify-content-center mt-3 mt-md-0">
            <MainNavigation />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
