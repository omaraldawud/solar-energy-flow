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
          title="Bright Ideas Start with Solar"
          subtitle1="Smart Energy:"
          subtitle2="For a Sustainable Future."
          description={
            <>
              We at <strong>Solar Energy Flow</strong>, believe in making differnce 
              to our plant, one panel at a time.  Join us as we make our 
              journey toa better tomorrow
            </>
          }
          imageUrl="/images/solar-energy-panels.jpg"
          imageAlt='Solar Ideas for Better Planet'
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
