import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { FaHome, FaBuilding, FaTools } from "react-icons/fa";
import { CompanyConfig } from "../../data/constants";
import solarServicesData from '../../data/solarServicesData';

const iconMap: Record<string, JSX.Element> = {
  FaHome: <FaHome size={48} className="text-primary mb-3" />,
  FaBuilding: <FaBuilding size={48} className="text-primary mb-3" />,
  FaTools: <FaTools size={48} className="text-primary mb-3" />,
};

const SolarServices = () => {
  return (
    <div className="container my-5">
      <Row>
        {solarServicesData.map((service) => (
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
                {/* Dynamically rendered icon */}
                {iconMap[service.icon]}
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
