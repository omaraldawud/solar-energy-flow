import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const HeroHome: React.FC = () => {
  return (
    <section className="bg-light py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Side: Hero Text */}
          <Col md={6} className="mb-4 mb-md-0">
            <h1 className="display-5 fw-bold">Power Your Future with Solar Energy</h1>
            <p className="lead mt-3">
              Join the clean energy revolution with Solar Energy Flow. Lower your bills,
              reduce your carbon footprint, and invest in a sustainable future.
            </p>
            <p>
              Contact us today to learn how solar can benefit your home or business.
            </p>
          </Col>

          {/* Right Side: Simple CTA Form */}
          <Col md={6}>
            <div className="p-4 bg-white shadow rounded">
              <h2 className="h5 mb-4 text-center">Get a Free Quote</h2>
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
                    Request Quote
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

export default HeroHome;
