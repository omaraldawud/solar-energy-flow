import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaPhone, FaSun } from 'react-icons/fa';
import MainNavigation from './MainNavigation';
import '../assets/css/Header.css'; 

import { COMPANY_NAME , COMPANY_PHONE_DISPLAY, COMPANY_PHONE_LINK } 
  from '../data/constants';


const Header: React.FC = () => {
  return (
    <header className="sticky-top bg-tealgreen text-white py-2 shadow-sm w-100">
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

            {/* Phone CTA */}
              <Col xs={12} md={4} className="d-flex align-items-center mt-3 mt-md-0">
                <div className="text-center w-100">
                  <p 
                    className="fw-bold fs-5 mb-0"
                    style={{ color: '#E3E1A9' }}>
                    <FaSun className="me-3" color="gold" />
                    Join Us in Making a Difference!
                  </p>

                </div>
              </Col>
            {/* Navigation */}
            <Col xs={12} md={5} className="mt-3 mt-md-0">
              <Row><MainNavigation /></Row>
              <Row>
                <Col className="text-end pt-4">
                  <a  
                      href={`tel:${COMPANY_PHONE_LINK}`} 
                      className="btn btn-warning text-dark fw-bold  align-items-center px-3 py-2">
                      <FaPhone size={32} color="white" className="me-4" />
                      {COMPANY_PHONE_DISPLAY}
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
