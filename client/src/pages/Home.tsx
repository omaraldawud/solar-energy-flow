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
import { HowItWorksProcess } from '../components/HowItWorksProcess';


const Home: React.FC = () => {
  return (
    <div className="app-container">
      <HeaderTop />

      {/* Hero Section */}
      <Hero
        title="Bright Ideas Start with Solar"
        subtitle1="Minnesota Solar Systems Designed & Delivered By Experts"
        subtitle2="Smart Energy: For a Sustainable Future."
        description={
          <>
          At Solar Energy Flow, we help Minnesota homeowners and businesses unlock the power of solar with high-efficiency <strong>Minnesota solar systems</strong>—expertly designed and installed through trusted <em>local partnerships</em>. Together, we’re building a cleaner future for our communities, one panel at a time.          </>
        }
        imageUrl="/images/solar-panel/residential-solar-installation.jpg"
        imageAlt="Solar Ideas for Better Planet"
        cardTitle="Free Aurora Design & Full Estimate"
      />
      {/* <HowItWorks /> */}
      <HowItWorksProcess />
      <SolarServices />
      <FAQs />
      <Footer />
    </div>
  );
};

export default Home;
