import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InfoCard from './InfoCard';
import BlackCard from '../forms-cta-cards/BlackCard';
import FormCard from './FormCard';

type HeroProps = {
  title: string;
  subtitle1: string;
  subtitle2: string;
  description: React.ReactNode;
  imageUrl?: string;
  imageAlt?: string;
  cardTitle?: string;
  iconClass?: string;
};

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle1,
  subtitle2,
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
            <p className="lead mt-3" style={{ color: '#FFC523', fontWeight: 'bold' }}>
              {subtitle1}
              <br />
              <span style={{ color: '#1bbfff' }}>{subtitle2}</span>
            </p>
            <p className="text-dark">{description}</p>

            {imageUrl && (
              <div
                className="position-relative rounded overflow-hidden mt-4"
                style={{ minHeight: '420px' }}
              >
                <div
                  className="position-absolute w-100 h-100"
                  style={{
                    background: `url(${imageUrl}) center/cover no-repeat`,
                    opacity: 0.2,
                    zIndex: 1,
                  }}
                  role="img"
                  aria-label={imageAlt}
                />
                <div className="position-relative z-2 d-flex flex-column flex-lg-row gap-4 p-4">
                  <InfoCard />
                  <BlackCard />
                </div>
              </div>
            )}
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
