import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { 
          COMPANY_NAME,
          COMPANY_EMAIL, 
          COMPANY_ADDRESS, 
          COMPANY_PHONE_LINK, 
          COMPANY_PHONE_DISPLAY } 
from '../data/constants';

import { 
  navLinksResidential,
  navLinksCommercial,
  navCommunityPrograms
} from './FooterNavigation'; 

import FooterSocialInfo from './FooterSocialInfo';
import FooterMainNav from './FooterMainNav';
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
              <p>{COMPANY_ADDRESS} </p>
              <FaPhone size={28} className="me-3" color='#E3E1A9'/>
              <a 
                className="text-white text-decoration-none" 
                href={`tel:${COMPANY_PHONE_LINK}`}>{COMPANY_PHONE_DISPLAY}
              </a>
              <div className="mt-3">
                  <FaEnvelope size={28} className="me-3" color='#E3E1A9'/>
                  <a className="text-white text-decoration-none" href="mailto:info@solarenergyflow.net">
                      {COMPANY_EMAIL}
                  </a>
              </div>
                  <FooterSocialInfo />
                  <p className='mt-4' style={{ color: '#D6D492' }}>{COMPANY_ADDRESS}</p>
                  <p className="mt-5" >
                    <em>
                      At {COMPANY_NAME}, we provide expert solar panel system design & installation.
                    </em>
                  </p>
                  <FooterMainNav />
            </Col>
            {/* Services Links */}
            <Col md={4} className="mb-3">
              <h5 className="text-warning">Solar Energy Services & Prodcuts</h5>
              <Row>
                  {/* Residential Services Column */}
                  <Col md={5} className="mb-3 mt-3">
                    <h6 className="text-danger mb-3">RESIDENTIAL SERVICES</h6>
                    <ul className="red-bullets ps-3">
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
                  <Col md={5} className="mb-3">
                    <h6 className="text-danger mb-3 mt-3">COMMERCIAL SERVICES</h6>
                    <ul className="red-bullets ps-3">
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
              </Row>
        </Col>

        <Col md={4} className="mb-3">
              <h5 className="text-warning">Solar Commuity Programs</h5>
              <p className="fs-6"><strong>Solar Community Programs</strong> provide access to renewable energy and potential savings on electricity bills for households unable to install solar panels.</p>
              <ul className="red-bullets ps-3">
              {navCommunityPrograms.map(({ href, label }) => (
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
        </Container>
      </footer>

      {/* Bottom Bar */}
      <div style={{ 
        backgroundColor: '#2A3037',
        maxWidth: '100vw',
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