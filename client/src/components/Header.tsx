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
        {/* First Row: Logo, Title, and Navigation */}
        <Row className="align-items-center">
          {/* Col 1: Logo & Title */}
          <Col xs={12} md={3} className="d-flex align-items-center">
            <a href="/">
              <img
                src="/images/SolarEnergyFlow-Logo.png"
                alt="Solar Energy Flow Logo"
                style={{ maxWidth: '120px' }}
                className="me-2"
              />
            </a>
            <h1 className="fs-5 fw-bold d-md-block mb-0">
              {COMPANY_NAME}
            </h1>
          </Col>

          {/* Col 2: Join us & Phone */}
          <Col md={4}>
            <Row className="mt-2">
              <Col xs={12} md={12} className='ms-5 fs-5 text-warning'>
                  <p 
                    style={{}}>
                    Join Us in Making a Difference!
                  </p>
              </Col>
              <Row>
                <Col>
                    <a href={`tel:${COMPANY_PHONE_LINK}`}>
                      <button className="btn fs-2 text-white fw-bold d-inline-flex align-items-center">
                        <FaPhone size={40} className="me-3 text-warning" />
                        {COMPANY_PHONE_DISPLAY}
                      </button>
                    </a>
                </Col>
              </Row>
            </Row>
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
