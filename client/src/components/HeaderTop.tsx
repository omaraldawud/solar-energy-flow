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
        <Container fluid>
          <Row className="align-items-center">

            {/* Logo & Title */}
            <Col xs={8} md={4} className="d-flex align-items-center">
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
            <Col xs={4} md={3} className="d-flex justify-content-end align-items-center">
              <a  href={`tel:${COMPANY_PHONE_LINK}`} className="btn btn-warning text-dark fw-bold d-flex align-items-center px-3 py-2">
                <FaPhone size={32} color="white" className="me-2" />
                <span className="d-none d-md-block">
                  Join Us in Making <br />a Difference! <br />
                  {COMPANY_PHONE_DISPLAY}
                </span>
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
