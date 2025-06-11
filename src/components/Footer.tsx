import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaPhone, FaTwitter } from 'react-icons/fa';

import { Clock, Phone, Mail } from 'lucide-react';
import ContactInfo from './ContactInfo';

const Footer: React.FC = () => {
  return (
    <>
      <footer style={{ backgroundColor: 'rgba(32, 39, 20, 0.85)' }}
                      className="text-white py-5 mt-5">
        <Container>
          <Row>
            {/* Logo & Contact */}
            <Col md={4} className="mb-3" style={{ marginTop: '-40px' }}>
              <img
                src="images/pacific-northwest-irrigation-logo.png"
                alt="Pacific Northwest Irrigation Logo"
                style={{ maxWidth: '180px' }}
                className="mb-1"
              />
              <p>2360 Hood Avenue San Diego, CA 92123</p>
              <FaPhone size={28} className="me-3" color='#E3E1A9'/>
                        <a  href="tel:+13344222211" className="fs-4 fw-bold" 
                            style={{ color: '#E3E1A9', textDecoration: 'none' }}>+1 334 422 2211
                        </a>
              <p className="mt-3" style={{ color: '#D6D492' }}>Pacific Northwest Irrigation offers expert irrigation solutions designed for efficiency and sustainability. We provide reliable, eco-friendly services to ensure your landscapes thrive while conserving water.</p>
            </Col>

            {/* Services Links in 2 Columns */}
            <Col md={4} className="mb-3">
              <h5 className="text-warning">Our Services</h5>
              <Row>
                <Col xs={6}>
                  <ul className="space-y-3 list-disc text-[#BCBA63]">
                    <li className='mb-2'><a href="#services" className="text-white text-decoration-none">Irrigation System Design</a></li>
                    <li className='mb-2'><a href="#services" className="text-white text-decoration-none">Irrigation System Installations</a></li>
                    <li className='mb-2'><a href="#services" className="text-white text-decoration-none">Irrigation System Inspection & Repairs</a></li>
                    <li className='mb-2'><a href="#services" className="text-white text-decoration-none">Back-flow Irrigation Services</a></li>
                  </ul>
                </Col>
                <Col xs={6}>
                  <ul className="space-y-3">
                    <li className='mb-2'><a href="#services" className="text-white text-decoration-none">Sprinkler Winterization</a></li>
                    <li className='mb-2'><a href="#services" className="text-white text-decoration-none">Spring Tune Up</a></li>
                    <li className='mb-2'><a href="#services" className="text-white text-decoration-none">Gardening Design & Planting</a></li>
                    <li className='mb-2'><a href="#services" className="text-white text-decoration-none">Water Features Design & Installation</a></li>
                  </ul>
                </Col>
              </Row>
            </Col>

            {/* Social Links & Text */}
            <Col md={4} className="mb-3">
              <h5 className="text-warning">Stay Connected</h5>
              <ContactInfo />
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Bottom Bar */}
      <div style={{ backgroundColor: '#2A3037', height: '20px' }} className="text-center text-white small d-flex align-items-center justify-content-center">
        <span>
          &copy; {new Date().getFullYear()} Pacific Northwest Irrigation. Designed and maintained by{' '}
          <a href="https://hostitwise.com" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-underline">
            Hostitwise.com
          </a>
        </span>
      </div>
    </>
  );
};

export default Footer;
