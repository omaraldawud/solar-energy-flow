import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FooterContactInfo from './FooterContactInfo';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { COMPANY_NAME, COMPANY_PHONE, COMPANY_EMAIL } from '../../data/constants';

import { 
  navLinksMain,
  navLinksResidential,
  navLinksCommercial,
  navSolarProducts,
  navEmergingSolarProducts
} from './FooterNavigation'; 
/* -------------------------------------------- */

const Footer: React.FC = () => {
  return (
    <>
      <footer 
        style={{backgroundColor: '#212529',}} 
        className="text-white py-5 mt-5">
        <Container>
          <Row>
            {/* Logo & Contact */}
            <Col md={4} className="mb-3" style={{ marginTop: '-40px' }}>
              <img
                src="/images/SolarEnergyFlow-Logo.png"
                alt="Solar Energy Flow Logo"
                style={{ maxWidth: '180px' }}
                className="mb-1"
              />
              <p>Chicago, Illinois. USA. </p>
              <FaPhone size={28} className="me-3" color='#E3E1A9'/>
              <a 
                className="text-white text-decoration-none" 
                href="tel:{COMPANY_PHONE}">{COMPANY_PHONE}
              </a>
              <div className="mt-3">
                  <FaEnvelope size={28} className="me-3" color='#E3E1A9'/>
                  <a className="text-white text-decoration-none" href="mailto:info@solarenergyflow.net">
                      {COMPANY_EMAIL}
                  </a>
              </div>
                  <p className="mt-3" style={{ color: '#D6D492' }}>
                    At {COMPANY_NAME}, we provide expert solar panel installation...
                  </p>
            </Col>

            {/* Services Links */}
            <Col md={4} className="mb-3">
              <h5 className="text-warning">Solar Energy Services & Prodcuts</h5>
 <Row>
  {/* Residential Services Column */}
  <Col md={3} className="mb-3">
    <h6 className="text-warning mb-3">RESIDENTIAL SERVICES</h6>
    <ul className="list-unstyled">
      {navLinksResidential.map(({ href, label }) => (
        <li key={href} className="mb-2">
          <a 
            href={href} 
            style={{ fontSize: '12px' }} 
            className="text-white text-decoration-none hover-gold"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  </Col>

  {/* Commercial Services Column */}
  <Col md={3} className="mb-3">
    <h6 className="text-warning mb-3">COMMERCIAL SERVICES</h6>
    <ul className="list-unstyled">
      {navLinksCommercial.map(({ href, label }) => (
        <li key={href} className="mb-2">
          <a 
            href={href} 
            style={{ fontSize: '12px' }} 
            className="text-white text-decoration-none hover-gold"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  </Col>

  {/* Solar Products Column */}
  <Col md={3} className="mb-3">
    <h6 className="text-warning mb-3">SOLAR PRODUCTS</h6>
    <ul className="list-unstyled">
      {navSolarProducts.map(({ href, label }) => (
        <li key={href} className="mb-2">
          <a 
            href={href} 
            style={{ fontSize: '12px' }} 
            className="text-white text-decoration-none hover-gold"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  </Col>

  {/* Emerging Technologies Column */}
  <Col md={3} className="mb-3">
    <h6 className="text-warning mb-3">EMERGING TECHNOLOGIES</h6>
    <ul className="list-unstyled">
      {navEmergingSolarProducts.map(({ href, label }) => (
        <li key={href} className="mb-2">
          <a 
            href={href} 
            style={{ fontSize: '12px' }} 
            className="text-white text-decoration-none hover-gold"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  </Col>
</Row>
            </Col>

            {/* Social Links */}
            <Col md={4} className="mb-3">
              <h5 className="text-warning">Stay Connected</h5>
              <FooterContactInfo />
              <ul style={{
                display: 'flex',
                gap: '20px',
                paddingLeft: '0',
                listStyle: 'none',
                margin: '1rem 0 0 0'
              }}>
                {navLinksMain.map(({ href, label }) => (
                  <li key={href}>
                    <a href={href} style={{ fontSize: '12px' }} className="text-white text-decoration-none hover-gold">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Bottom Bar */}
      <div style={{ 
        backgroundColor: '#2A3037',
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw'
      }} className="py-2 text-center text-white small">
        <span>
          &copy; {new Date().getFullYear()} {COMPANY_NAME}. Designed and maintained by{' '}
          <a href="https://hostitwise.com" target="_blank" rel="noopener noreferrer" 
             className="text-white text-decoration-underline">
            Hostitwise.com
          </a>
        </span>
      </div>
    </>
  );
};

export default Footer;