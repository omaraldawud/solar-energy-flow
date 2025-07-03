// components/ServiceCard.tsx
import React from 'react';
import { Card } from 'react-bootstrap';

type ServiceCardProps = {
  imageUrl: string;
  title: string;
  description: string;
  linkText: string;
  icon?: React.ReactNode;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageUrl,
  title,
  description,
  linkText,
  icon,
}) => {
  return (
    <Card className="h-100 border-0 shadow-sm">
      <Card.Img 
        variant="top" 
        src={imageUrl} 
        alt={title} 
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column justify-content-between text-center p-4">
        {icon && <div className="mb-3">{icon}</div>}
        <Card.Title as="h3" className="h4 mb-3">{title}</Card.Title>
        <Card.Text className="mb-4">{description}</Card.Text>
        <a href="#" className="text-primary text-decoration-none fw-bold">
          {linkText}
        </a>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
