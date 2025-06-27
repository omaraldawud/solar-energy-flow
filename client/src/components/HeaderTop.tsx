import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaPhone } from 'react-icons/fa';
import MainNavigation from './MainNavigation';
import './Header.css'; // Custom styles here (if needed)
import CallToActionBanner from './CallToActionBanner';
import { COMPANY_PHONE_DISPLAY,  COMPANY_PHONE_LINK } from './constants/Constants';

const Header: React.FC = () => {
  return (
    <header className="sticky-top bg-tealgreen text-white py-2 shadow-sm w-100">
        <Container fluid>
          <Row className="align-items-center">

            {/* Logo & Title */}
        <Col xs={8} md={4} className="d-block d-md-none">
          <div className="d-flex align-items-center mb-2">
            <img
              src="/images/SolarEnergyFlow-Logo.png"
              alt="Solar Energy Flow Logo"
              style={{ maxWidth: '60px' }}
              className="me-2"
            />
            <h1 className="fs-6 fw-bold mb-0">Solar Energy Flow</h1>
          </div>

          <div>
            <a
              style={{ color: 'rgb(38, 204, 167)', fontWeight: 600 }}
              href={`tel:${COMPANY_PHONE_LINK}`}
            >
              {COMPANY_PHONE_DISPLAY}
            </a>
          </div>
        </Col>


            {/* Phone CTA */}
            <Col xs={4} md={3} className="d-flex justify-content-end align-items-center">
              <a href={`tel:${COMPANY_PHONE_LINK}`} className="btn btn-warning text-dark fw-bold d-flex align-items-center px-3 py-2">
                <FaPhone size={18} color="white" className="me-2" />
                <span className="d-none d-md-block">
                  Join Us in Making <br />a Difference! <br />
                  {COMPANY_PHONE_DISPLAY}</span>
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
