import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaPhone, FaSun } from 'react-icons/fa';
import MainNavigation from './MainNavigation';
import '../assets/css/Header.css'; 

import { COMPANY_NAME , COMPANY_PHONE_DISPLAY, COMPANY_PHONE_LINK } 
  from '../data/constants';


const Header: React.FC = () => {
  return (
    <header 
      className="sticky-top bg-tealgreen text-white py-2 shadow-sm w-100"
      >
        <Container>
          <Row className="align-items-center">

            {/* Logo & Title */}
            <Col xs={12} md={3} className="d-flex align-items-center">
              <a href="/">  {/* Link to home page */}
                <img
                  src="/images/SolarEnergyFlow-Logo.png"
                  alt="Solar Energy Flow Logo"
                  style={{ maxWidth: '120px' }}
                  className="me-2"
                />
                </a>
                <h1 className="fs-5 fw-bold  d-md-block">
                  {COMPANY_NAME}
                </h1>
            </Col>

            <Col xs={12} md={4} className="d-flex align-items-center mt-3 mt-md-0">
                <div className="text-center w-100">
                  <p 
                    className="fw-bold fs-5 mb-0 d-flex justify-content-center align-items-center"
                    style={{ color: '#E3E1A9' }}>
                    <img 
                      src="/images/energy-seeding.png" 
                      alt="Energy Seeding" 
                      className="me-3"
                      style={{ width: '24px', height: '24px', objectFit: 'cover' }}
                    />
                    Join Us in Making a Difference!
                  </p>
                </div>

            </Col>
            {/* Navigation */}
            <Col xs={12} md={5} className="mt-3 mt-md-0">
              <Row>
                <MainNavigation />
              </Row>
              <Row>
                <Col className="d-flex justify-content-end">
                    <a href={`tel:${COMPANY_PHONE_LINK}`}>
                        <button className="btn  fs-3 fw-bold d-inline-flex align-items-center px-4 py-3">
                          <FaPhone size={40} className="me-3 text-warning" />
                          {COMPANY_PHONE_DISPLAY}
                        </button>
                    </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </header>
  );
};

export default Header;
