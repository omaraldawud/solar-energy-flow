import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import ContactForm from './ContactForm';
import CallToActionBanner from './CallToActionBanner';
import '@fortawesome/fontawesome-free/css/all.min.css';

type HeroProps = {
  title: string;
  subtitle1: string;
  subtitle2: string;
  description: React.ReactNode;
  imageUrl?: string; // Optional hero image
  imageAlt?: string; // Optional hero image ALt tag
  formTitle?: string;
  ctaButtonText?: string;
};

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle1,
  subtitle2,
  description,
  imageUrl,
  imageAlt,
  formTitle = 'Get a Free Quote',
  ctaButtonText = 'Request Quote Today',
}) => {
  return (
    <section  style={{ backgroundColor: '#316E62', padding: 50 }}>
      <Container>
        <Row className="d-flex align-items-end"> {/* Added d-flex to ensure side-by-side layout */}
          {/* Left Side: Hero Text */}
          <Col md={8}>
            <h1 className="display-5 fw-bold text-white">{title}</h1>
            <p  className="lead mt-3" style={{ color: '#FFC523' }}>
                  {subtitle1} {subtitle2}
            </p>
            <p>{description}</p>
            {imageUrl && (
            <div className="position-relative mt-4 rounded overflow-hidden" style={{ height: '400px' }}>
              {/* Background Image with Dark Overlay */}
              <div  className="position-absolute w-100 h-100" 
                    style={{ 
                      background: `linear-gradient(url(${imageUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}>
              </div>
    
            {/* Text Content - Aligned to Top */}
            <div className="position-absolute top-0 start-0 w-100 h-100 p-4">
  {/* Two Column Layout */}
  <div className="d-flex h-100 gap-4">
 
    {/* First Column */}
    <div className="py-3 px-4 text-center" 
          style={{  flex: 1, backgroundColor: '#13BBA7', 
                    border: '2px solid #13BBA7',
                    borderRadius: '30px'}}>

      <h4 className="fw-bold mb-3">Direct Energy</h4>
      <p>we source directly from solar manufactrure</p>
      <ul className="list-unstyled" style={{ fontSize: '0.9rem' }}>
        <li className="mb-2 d-flex align-items-center text-white">
          <i className="fas fa-award me-2"></i> {/* Font Awesome house icon */}
            25-year Performance Warranty on Panels
          </li>
        <li className="mb-2 d-flex align-items-center text-white">
          <i className="fas fa-tachometer-alt me-2"></i>
          23.5% Tier 1 Efficiency Panels
        </li>
        <li className="mb-2 d-flex align-items-center text-white">
          <i className="fas fa-palette me-2"></i>
          Full Black Seamless Aesthetic
        </li>
        <li className="d-flex align-items-center text-white">
          <i className="fas fa-hard-hat me-2"></i>
          Durability Against Extreme Environmental Conditions
        </li>
      </ul>
    </div>

    {/* Second Column */}
    <div  className="py-3 px-4 text-center" 
          style={{  flex: 1, backgroundColor: '#13BBA7', 
                    border: '2px solid #13BBA7',
                    borderRadius: '30px'}}
          >
      <h4 className="fw-bold mb-3"><strong style={{ color: 'white' }}>FREE</strong> Propery Assessment With Just Your:</h4>
      <ul className="list-unstyled" style={{ fontSize: '0.9rem' }}>
        <li className="mb-2 d-flex align-items-center text-white">
          <i className="fas fa-house me-2 text-white"></i> {/* Font Awesome house icon */}
          Property Address
        </li>
        <li className="mb-2 d-flex align-items-center text-white">
          <i className="fas fa-file-invoice me-2 text-white"></i> {/* Font Awesome bill icon */}
          Your billing information text
        </li>
      </ul>
      <h4 className="fw-bold mb-3">We will Generate a Report with:</h4>
      <ul className="list-unstyled" style={{ fontSize: '0.9rem' }}>
        <li className="mb-2 d-flex align-items-center text-white">
          <i className="fas fa-solar-panel text-white me-3 mt-1"></i>          Rooftop System Design Model.
        </li>
        <li className="mb-2 d-flex align-items-center text-white">
          <i className="fas fa-chart-line text-white me-3 mt-1"></i>
                Finanacial & Environmental Savings Report.
        </li>
        <li className="mb-2 d-flex align-items-center text-white">
          <i className="fas fa-file-invoice-dollar text-white me-3 mt-1"></i>          Full Project Quote.
        </li>
      </ul>
      <Button className="bg-success border-0 d-flex align-items-center justify-content-center gap-2">
        Click to see if you qualify
        <span className="d-inline-flex">
          <i className="fas fa-chevron-right"></i>
        </span>
      </Button>
      </div>
    </div>
  </div>
          </div>
        )}
          </Col>

          {/* Right Side: Simple CTA Form */}
          <Col md={4}>              
              <div className="p-4 bg-white shadow rounded">
              <h3 className="h5 mb-4 text-center">{formTitle}</h3>
                <ContactForm ctaButtonText={ctaButtonText} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
