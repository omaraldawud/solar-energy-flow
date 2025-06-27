import React from 'react';

//Components
import Hero from '../components/Hero';
import HeaderTop from '../components/HeaderTop';
import Footer from '../components/Footer';
import SolarServices from '../components/SolarServices';
import { FAQs } from '../components/FAQs';

//Style Sheets
import '../assets/css/Header.css'; 
import { HowItWorks } from '../components/HowItWorks';


const Home: React.FC = () => {
  return (
    <div className="app-container">
      <HeaderTop />

      {/* Hero Section */}
      <Hero
        title="Bright Ideas Start with Solar"
        subtitle1="Smart Energy:"
        subtitle2="For a Sustainable Future."
        description={
          <>
            We at <strong>Solar Energy Flow</strong> believe in making a difference 
            to our planet, one panel at a time. Join us as we journey to a better tomorrow.
          </>
        }
        imageUrl="/images/solar-panel/residential-solar-installation.jpg"
        imageAlt="Solar Ideas for Better Planet"
        formTitle="Want to Learn More? Contact Us"
        ctaButtonText="Contact Us Now"
      />
      <HowItWorks />
      <SolarServices />
      <FAQs />
      <Footer />
    </div>
  );
};

export default Home;
