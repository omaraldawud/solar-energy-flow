import React from 'react';
import SEO from '../components/seo-components/SEO';
import HeaderTop from '../components/HeaderTop';
import Hero from '../components/Hero';
import SolarServices from '../components/SolarServices';
import Footer from '../components/Footer';
import seoData from '../../data/seoData';

const Home: React.FC = () => {
  return (
    <div className="app-container">
      <SEO {...seoData.home} />
      <div className="container-fluid p-0">
        <HeaderTop />
        <Hero
          title="Power Your Future with Solar Energy"
          subtitle="Clean, renewable, affordable."
          description="We help you reduce energy costs and build a sustainable future with certified solar solutions."
          imageUrl="/images/solar-energy-panels.jpg"
          formTitle="Get Your Free Solar Quote"
          ctaButtonText="Contact Us Now"
        />
        <SolarServices />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
