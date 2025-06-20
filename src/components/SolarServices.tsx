import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { FaHome, FaBuilding, FaTools } from "react-icons/fa";
import { COMPANY_NAME, CompanyConfig } from '../constants';

const SolarServices = () => {
  const services = [
  {
    id: 1,
    title: "Residential Solar Installation",
    icon: <FaHome size={48} className="text-primary mb-3" />,
    description: "Turnkey solar solutions for homeowners with premium panels, battery storage options, and smart energy monitoring.",
    linkText: "Explore home solutions >",
    imageUrl: "/images/solar-panles/solar-panel-installation.jpg"
  },
  {
    id: 2,
    title: "Commercial Solar Systems",
    icon: <FaBuilding size={48} className="text-primary mb-3" />,
    description: "Custom-designed solar arrays for businesses to reduce operational costs and meet sustainability goals.",
    linkText: "See business benefits >",
    imageUrl: "/images/solar-panles/commercial-solar-installation.jpg"
  },
  {
    id: 3,
    title: "Solar Maintenance Plans",
    icon: <FaTools size={48} className="text-primary mb-3" />,
    description: "Proactive cleaning, performance checks, and repairs to maximize your system's efficiency and lifespan.",
    linkText: "View maintenance packages >",
    imageUrl: "/images/solar-panles/solar-maintenance.jpg"
  }
];

  return (
    <div className="container my-5">
      <Row>
        {services.map((service) => (
          <Col key={service.id} md={4} className="mb-4">
            <Card className="h-100 border-0 shadow-sm">
              {/* Image at the top of the card */}
              <Card.Img 
                variant="top" 
                src={service.imageUrl} 
                alt={service.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body className="text-center p-4">
                {service.icon}
                <Card.Title as="h3" className="h4 mb-3">{service.title}</Card.Title>
                <Card.Text className="mb-4">{service.description}</Card.Text>
                <a href="#" className="text-primary text-decoration-none fw-bold">
                  {service.linkText}
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SolarServices;