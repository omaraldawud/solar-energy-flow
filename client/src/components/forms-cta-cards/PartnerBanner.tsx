import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../assets/css/PartnerBanner.css'; // Custom styles

const PartnerBanner = () => {
  return (
    <section className="partner-banner text-white d-flex align-items-center">
      <Container>
        <Row>
          <Col md={10} lg={8}>
            <h5 className="text-teal fw-bold">Partner with us</h5>
            <h1 className="display-8 fw-bold">free. solar system . design.</h1>
            <div className="border-start border-teal ps-3 mt-4">
              <p className="lead">
                We are a certified National Energy Service Company (ESCO) that designs projects for commercial and industrial entities.
              </p>
              <p className="lead">
                We’ll be your trusted partner through every stage of your solar project. 
                With deep experience in managing complex and  
                <span className="text-success-custom"> integrated installations</span>, 
                we ensure a smooth and successful execution from start to finish. 

              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PartnerBanner;
