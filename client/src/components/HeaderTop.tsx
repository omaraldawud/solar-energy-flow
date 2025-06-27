import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaPhone } from 'react-icons/fa';
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
    <Col xs={8} md={4} className="d-flex align-items-center">
      <a href="/" className="logo-title me-2"> {/* Link to home page */}
        <img
          src="/images/SolarEnergyFlow-Logo.png"
          alt="Solar Energy Flow Logo"
          style={{ maxWidth: '120px' }}
        />
      </a>
      <div className="d-flex flex-column justify-content-center">
        <h1 className="fs-5 fw-bold mb-1 d-md-block">
          {COMPANY_NAME}
        </h1>
        <span className="text-muted small text-center text-md-start">
          +1 (218) 460 - 9057<br />
          Join Us in Making a Difference!
        </span>
      </div>
    </Col>

    {/* Navigation */}
    <Col xs={12} md={8} className="mt-3 mt-md-0">
      <MainNavigation />
    </Col>
  </Row>
</Container>

      </header>
  );
};

export default Header;
