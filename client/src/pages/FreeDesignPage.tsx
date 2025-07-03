import React from 'react';
import SEO from '../components/seo-components/SEO'; 
import Header from '../components/Header';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Footer from '../components/Footer';
import Hero from '@/components/Hero';

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

    <div className="fullscreen-bg">
        <Header />
            <Hero
                title="FREE Custom Solar System Designs for a Brighter Tomorrow"
                subtitle1="Solar Systems Designed & Delivered By Experts"
                subtitle2="Smart Energy: For a Sustainable Future."
                description={
                    <>
                    Unlock the benefits of clean energy with our expert <strong>solar system design services</strong>. 
                    At Solar Energy Flow, we deliver custom-designed, high-performance solar solutions tailored to your energy needs and property layout. 
                    From initial concept to final installation, our experienced Minnesota-based team is here to help you transition to a smarter, more sustainable energy future.
                    </>
                }
                imageUrl="/images/solar-panel/residential-solar-installation.jpg"
                imageAlt="Expert Solar System Design in Minnesota"
                cardTitle="Request Your Free Design & Estimate"
                />

        <Footer />
      </div>
    </>
  );
};

export default FreeDesignPage;
