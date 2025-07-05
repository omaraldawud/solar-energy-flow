import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ContactForm from './forms-cta-cards/ContactForm';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AirtableForm from './forms-cta-cards/AirtableForm';
import BlackCard from './forms-cta-cards/BlackCard';

type HeroProps = {
  title: string;
  subtitle1: string;
  subtitle2: string;
  description: React.ReactNode;
  imageUrl?: string;
  imageAlt?: string;
  cardTitle?: string;
  ctaButtonText?: string;
  iconClass: string;
};

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle1,
  subtitle2,
  description,
  imageUrl,
  imageAlt = 'Solar Ideas for Better Planet',
  cardTitle = 'Get a Free Quote',
  iconClass = 'fas fa-solar-panel',
}) => {
 return (
    <section>
      <Container className="py-5">
        <Row className="g-4 d-flex align-items-stretch">
          {/* Left Section */}
          <Col md={8} xs={12}>
            <h1 className="display-5 fw-bold text-dark">{title}</h1>
            <p className="lead mt-3" style={{ color: '#FFC523', fontWeight: 'bold' }}>
              {subtitle1} <br /> 
              <span style={{color: '#1bbfff'}}>
                {subtitle2} 
              </span>
            </p>
            <p className="text-dark">{description}</p>

            {imageUrl && (
              <div
                className="position-relative rounded overflow-hidden mt-4"
                style={{ height: 'auto', minHeight: '420px' }}
              >
                <div
                  className="position-absolute w-100 h-100"
                  style={{
                    background: `url(${imageUrl}) center/cover no-repeat`,
                    opacity: 0.2,
                    zIndex: 1,
                  }}
                  role="img" // Tells screen readers this div acts as an image
                  aria-label = {imageAlt}
                />
                <div className="position-relative z-2 d-flex flex-column flex-lg-row gap-4 p-4">
                  {/* Card 1 */}
                  <div className="p-3 rounded-4 text-dark flex-fill">
                    <h3 className="fw-bold fs-2">DIRECT ENERGY</h3>
                    <p className="text-warning">source directly from solar manufacturers</p>
                  <ul className="list-unstyled feature-list">
                    <li className="mb-2 d-flex align-items-center">
                      <i className="fas fa-award me-3 fa-fw" /> 25-year Warranty
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                      <i className="fas fa-tachometer-alt me-3 fa-fw" /> 23.5% Efficiency
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                      <i className="fas fa-palette me-3 fa-fw" /> Full Black Aesthetic
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="fas fa-hard-hat me-3 fa-fw" /> Built for Harsh Weather
                    </li>
                  </ul>
                    <h4 className='mt-5'>Fast custom designs & full-service equipment procurement</h4>
                  </div>
                  {/* Card 2 */}
                  <BlackCard />
                </div>
              </div>
            )}
          </Col>

          {/* Right Section: Form */}
          <Col md={4} xs={12}>
            <div
              className="p-4  shadow rounded h-100 d-flex flex-column justify-content-start"
              style={{
                  backgroundImage: "url('/images/solar-battery-system-bg.webp')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
            >
              <h3 className="h5 mb-4 text-center"
                  style={{color:'rgb(0 255 192)'}}
                  >
                  <i className={`${iconClass} me-2 text-white`}></i>  
                  {cardTitle}
              </h3>
              {/*<ContactForm ctaButtonText={ctaButtonText} />*/}
              <AirtableForm />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
