import React from 'react';
import SEO from '../components/seo-components/SEO'; 
import Header from '../components/Header';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Footer from '../components/Footer';
import Hero from '@/components/forms-cta-cards/Hero';
import PartnerBanner from '@/components/forms-cta-cards/PartnerBanner';
import FormCard from '@/components/forms-cta-cards/FormCard';

const cardTitle = 'Get a Free Quote';
const iconClass = 'fas fa-solar-panel';

const FreeDesignPage = () => {
  return (
    <>
      <SEO
        title="Free Solar System Design | Solar Energy Flow"
        description="Get a free custom solar system design for your home or business. No obligation. Start saving with clean energy today!"
        keywords="free solar design, custom solar quote, solar panel estimate"
        ogTitle="Claim Your Free Solar System Design"
        ogDescription="Let our experts design a personalized solar system for your property—completely free."
        ogUrl="https://solarenergyflow.net/free-design"
        ogImage="https://solarenergyflow.net/images/free-solar-og.jpg" // add this image!
      />

      <Header />
      <Container className="my-5">
          <Row >
            <Col md={8}>
              <div className="p-4 h-100 shadow rounded bg-dark text-white">
                <PartnerBanner />
              </div>
            </Col>
            <Col md={4}>          
              <div className="p-4 h-100 shadow rounded bg-dark">
                    <FormCard cardTitle={cardTitle} iconClass={iconClass} />
              </div>
            </Col> 
          </Row>
      </Container>
      <Footer />
  </>
);
};

export default FreeDesignPage;
