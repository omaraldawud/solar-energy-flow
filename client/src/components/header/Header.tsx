import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaPhone, FaSun, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import MainNavigation from './MainNavigation';
import '../../assets/css/Header.css';
import { COMPANY_NAME, COMPANY_PHONE_DISPLAY, COMPANY_PHONE_LINK } 
        from '../../data/constants';

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
                <p>Join Us in Making a Difference!</p>
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

          {/* Col 3: Navigation with Social Links */}
          <Col xs={12} md={5}>
            {/* Social Links Row */}
            <Row className="justify-content-end mb-2">
              <Col xs="auto">
                <a href="https://facebook.com" className="text-white me-3">
                  <FaFacebook size={20} />
                </a>
              </Col>
              <Col xs="auto">
                <a href="https://twitter.com" className="text-white me-3">
                  <FaTwitter size={20} />
                </a>
              </Col>
              <Col xs="auto">
                <a href="https://instagram.com" className="text-white me-3">
                  <FaInstagram size={20} />
                </a>
              </Col>
              <Col xs="auto">
                <a href="https://linkedin.com" className="text-white">
                  <FaLinkedin size={20} />
                </a>
              </Col>
            </Row>
            
            {/* Navigation Row */}
            <Row>
              <Col>
                <MainNavigation />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;