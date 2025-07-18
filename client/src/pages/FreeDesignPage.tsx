//FreeDesignPage.tsx
//
import SEO from '@/components/seo/SEO'; 
import Header from '@/components/header/Header';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Footer from '@/components/footer/Footer';
import Hero from '@/components/cards/Hero';
import PartnerBanner from '@/components/cards/PartnerBanner';
import FormCard from '@/components/forms-cta/FormCard';
import { HeroMotto } from '@/components/about';

const cardTitle = 'Free Solar System Design';
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
            <div className="hero-section bg-primary text-white py-2">
              <div className="container py-4">
                <HeroMotto 
                  title ="Your Solar Questions Answered"
                  subtitle="Speak with our energy experts:  +1 (218) 460 - 9057"
                  tagline="Empowering you, one ray at a time"
                />
              </div>
            </div>
      <Container className="my-5">
          <Row >
            <Col md={8}>
              <div className="p-4 h-100 shadow rounded bg-dark text-white">
                <PartnerBanner />
                <blockquote className="blockquote ps-3 border-start border-success">
                  <h4>Sustainable Prodcuts & Sourcing</h4>
                  <p  className="text-success mb-4 fst-italic">
                      Going Solar has never been easier!<br />
                  </p>
                  <p>
                      We source out Tier 1 solar panels directly from trusted manufacturers.
                      Our products meet the highest standards for performance, durability, and long-term reliability.
                  </p>
                  <footer className="blockquote-footer text-muted mt-1">Your journey to energy independence starts here</footer>
                </blockquote>
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
