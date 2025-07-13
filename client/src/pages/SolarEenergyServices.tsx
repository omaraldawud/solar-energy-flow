import React from 'react';

//Components
import HeaderTop from '../components/header/Header';
import Footer from '../components/footer/Footer';
import SolarServices from '../components/home/SolarServices';
import { HowItWorksProcess } from '../components/forms-cta-cards/HowItWorksProcess';
import { HeroMotto } from '@/components/about';
import SEO from '@/components/seo/SEO';
import { FAQs } from '../components/home/FAQs';

//Style Sheets
import '../assets/css/Header.css'; 

const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Solar Energy Services | Direct Manufacturer Pricing | Solar Energy Flow"
        description="Get factory-direct solar panels and professional installation from Solar Energy Flow. Cut out middlemen costs with our direct-from-manufacturer energy solutions."
        keywords="direct solar panels, manufacturer pricing solar, solar installation services, commercial solar solutions, residential solar systems"
        ogTitle="Direct-from-Manufacturer Solar Energy Services"
        ogDescription="Solar Energy Flow connects you directly to solar panel manufacturers for maximum savings. Professional installation included with every system." ogImage="https://solarenergyflow.net/images/free-solar-og.jpg" // add this image!
      />
    <div className="app-container">
      <HeaderTop />

      <div className="bg-primary text-white py-2">
        <div className="container py-4">
          <HeroMotto 
            title="Direct-from-Manufacturer Solar Solutions"
            subtitle="Cutting out middlemen to deliver solar panels at factory prices"
            tagline="DIRECT ENERGY, DIRECT SAVINGS – No Markups, Just Premium Solar"
          />
        </div>
      </div>


      {/* <HowItWorks /> */}
      <HowItWorksProcess variant="services" title={'Services'}/>
      <SolarServices />      
      <Footer />
    </div>
           </>
  );
};

export default Home;
