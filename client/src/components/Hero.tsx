import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ContactForm from './ContactForm';
import '@fortawesome/fontawesome-free/css/all.min.css';

type HeroProps = {
  title: string;
  subtitle1: string;
  subtitle2: string;
  description: React.ReactNode;
  imageUrl?: string;
  imageAlt?: string;
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
    <section style={{ backgroundColor: '#316E62' }}>
      <Container className="py-5">
        <Row className="g-4 d-flex align-items-stretch">
          {/* Left Section */}
          <Col md={8} xs={12}>
            <h1 className="display-5 fw-bold text-white">{title}</h1>
            <p className="lead mt-3" style={{ color: '#FFC523' }}>
              {subtitle1} {subtitle2}
            </p>
            <p className="text-white">{description}</p>

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
                />
                <div className="position-relative z-2 d-flex flex-column flex-lg-row gap-4 p-4">
                  {/* Card 1 */}
                  <div className="bg-lightgreen p-3 rounded-4 text-white flex-fill">
                    <h4 className="fw-bold mb-2">Direct Energy</h4>
                    <p>We source directly from solar manufacturers</p>
                    <ul className="list-unstyled small">
                      <li className="mb-2 d-flex align-items-center">
                        <i className="fas fa-award me-2" /> 25-year Warranty
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <i className="fas fa-tachometer-alt me-2" /> 23.5% Efficiency
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <i className="fas fa-palette me-2" /> Full Black Aesthetic
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="fas fa-hard-hat me-2" /> Built for Harsh Weather
                      </li>
                    </ul>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-lightgreen p-3 rounded-4 text-white flex-fill">
                    <h4 className="fw-bold mb-2">
                      <strong className="text-white">FREE</strong> Property Assessment
                    </h4>
                    <ul className="list-unstyled small">
                      <li className="mb-2 d-flex align-items-center">
                        <i className="fas fa-house me-2" /> Property Address
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <i className="fas fa-file-invoice me-2" /> &nbsp; Billing Information
                      </li>
                    </ul>
                    <h5 className="fw-bold mt-3 mb-2">Includes:</h5>
                    <ul className="list-unstyled small">
                      <li className="mb-2 d-flex align-items-center">
                        <i className="fas fa-solar-panel me-2" /> Rooftop System Design
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <i className="fas fa-chart-line me-2" /> Savings Report
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="fas fa-file-invoice-dollar me-2" /> Full Project Quote
                      </li>
                    </ul>
                    <Button className="bg-success border-0 mt-2">
                      Click to See If You Qualify <i className="fas fa-chevron-right ms-2" />
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </Col>

          {/* Right Section: Form */}
          <Col md={4} xs={12}>
            <div className="p-4 bg-white shadow rounded h-100 d-flex flex-column justify-content-center">
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
