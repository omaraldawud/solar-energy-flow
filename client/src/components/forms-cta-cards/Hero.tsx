import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InfoCard from './InfoCard';
import BlackCard from '../forms-cta-cards/BlackCard';
import FormCard from './FormCard';
import FeatureList from './FeatureList';

type HeroProps = {
  title: string;
  description: React.ReactNode;
  imageUrl?: string;
  imageAlt?: string;
  cardTitle?: string;
  iconClass?: string;
};

const Hero: React.FC<HeroProps> = ({
  title,
  description,
  imageUrl,
  imageAlt = 'Solar Ideas for Better Planet',
  cardTitle,
  iconClass,
}) => {
  return (
    <section>
      <Container className="py-5">
        <Row className="g-4 d-flex align-items-stretch">
          {/* Left Content */}
          <Col md={8}>
            <h1 className="display-5 fw-bold text-dark">{title}</h1>
            <FeatureList />
            <p className="text-dark mt-4 mb-4">{description}</p>
            <BlackCard />
          </Col>

          {/* Form */}
          <Col md={4}>
            <FormCard cardTitle={cardTitle} iconClass={iconClass} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
