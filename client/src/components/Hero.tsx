import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

type HeroProps = {
  title: string;
  subtitle1: string;
  subtitle2: string;
  description: string;
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
  ctaButtonText = 'Request Quote',
}) => {
  return (
    <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Side: Hero Text */}
          <Col md={6} className="mb-4 mb-md-0">
            <h1 className="display-5 fw-bold">{title}</h1>
            <p className="lead mt-3">{subtitle1} {subtitle2}</p>
            <p>{description}</p>
            {imageUrl && (
              <div className="mt-4">
                <img
                  src={imageUrl}
                  alt={imageAlt}
                  className="img-fluid rounded shadow-sm"
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
              </div>
            )}
          </Col>

          {/* Right Side: Simple CTA Form */}
          <Col md={6}>
            <div className="p-4 bg-white shadow rounded">
              <h2 className="h5 mb-4 text-center">{formTitle}</h2>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Your message" />
                </Form.Group>

                <div className="d-grid">
                  <Button variant="primary" type="submit">
                    {ctaButtonText}
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
