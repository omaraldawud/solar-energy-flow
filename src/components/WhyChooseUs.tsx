import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaStopwatch, FaTools, FaLeaf, FaHandsHelping } from 'react-icons/fa';

const WhyChooseUs: React.FC = () => {
  const features = [
  {
    icon: <FaStopwatch size={40} color="#6c973d" />,
    title: 'Fast & Reliable Service',
    description: 'We ensure quick response and timely project completion to keep your landscape thriving without delay.'
  },
  {
    icon: <FaTools size={40} color="#6c973d" />,
    title: 'Expert Solar Installer',
    description: 'Our team brings years of expertise in designing and installing high-quality, efficient solar systems tailored to your specific needs.'
  },
  {
    icon: <FaLeaf size={40} color="#6c973d" />,
    title: 'Eco-Friendly Solutions',
    description: 'At Solar Energy Flow, we prioritize sustainable innovation to reduce environmental impact without compromising performance. Our eco-friendly solutions—from energy-efficient solar panels to smart resource management systems—help businesses and homeowners lower carbon footprints while cutting costs.'
  },
  {
    icon: <FaHandsHelping size={40} color="#6c973d" />,
    title: 'Customer-Centered',
    description: 'From consultation to maintenance, our customer-centric approach ensures we listen to your needs and provide personalized solutions for complete customer satisfaction.'
  },
];


  return (
    <Container className="py-5 text-center">
      <h2 className="fw-bold text-light">Why Choose Us</h2>
      <p>Let us now emphasize on the main benefits that customers will get using Soalr Energy Flow.</p>
      <hr  style={{ width: '50%', borderTop: '5px solid #BCBA63', margin: '1rem auto' }} />
      <Row className="mt-4">
        {features.map((feature, idx) => (
          <Col key={idx} md={3} sm={6} xs={12} className="mb-4">
            <Card className="h-100 shadow-sm border-0 rounded p-3">
              <div className="bg-light rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                {feature.icon}
              </div>
              <Card.Body>
                <Card.Title className="fw-bold">{feature.title}</Card.Title>
                <Card.Text>{feature.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WhyChooseUs;
