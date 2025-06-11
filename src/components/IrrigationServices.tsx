import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { FaWater, FaWrench, FaShower } from "react-icons/fa";

const IrrigationServices = () => {
  const services = [
    {
      id: 1,
      title: "Irrigation System Installations",
      icon: <FaWater size={48} className="text-primary mb-3" />,
      description: "Fixing leaks, broken sprinkler heads, or malfunctioning valves. Seasonal maintenance such as winterization and spring startup, irrigation system inspection/repairs and back-flow services.",
      linkText: "read more >",
      imageUrl: "/images/irrigation-services.jpg" // Replace with your image URL
    },
    {
      id: 2,
      title: "Irrigation System Inspection & Repairs",
      icon: <FaWrench size={48} className="text-primary mb-3" />,
      description: "Retrofitting old systems with modern, water-efficient components. Smart controller integration for remote monitoring and management. Inspection & Repairs.",
      linkText: "read more >",
      imageUrl: "/images/irrigation-services.jpg" // Replace with your image URL
    },
    {
      id: 3,
      title: "Back-flow Irrigation Services",
      icon: <FaShower size={48} className="text-primary mb-3" />,
      description: "Installation and maintenance of drip irrigation systems for precise water delivery to plants, ensuring efficient water use and healthy plant growth.",
      linkText: "read more >",
      imageUrl: "/images/irrigation-services.jpg" // Replace with your image URL
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

export default IrrigationServices;