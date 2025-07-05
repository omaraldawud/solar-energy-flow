import React from 'react';

//Components
import Hero from '../components/Hero';
import HeaderTop from '../components/Header';
import Footer from '../components/Footer';
import SolarServices from '../components/SolarServices';
import { FAQs } from '../components/FAQs';
import { HowItWorksProcess } from '../components/HowItWorksProcess';


//Style Sheets
import '../assets/css/Header.css'; 


const Home: React.FC = () => {
  return (
    <div className="app-container">
      <HeaderTop />

      {/* Hero Section */}
      <Hero
          title="Get Your Free Solar System Design"
          subtitle1="Minnesota Solar System Design by Local Experts"
          subtitle2="Custom Solar Plans for a Brighter Future"
          description={
            <>
              At Solar Energy Flow, we specialize in <strong>custom solar system design</strong> for Minnesota homes and businesses. 
              Our team of experts uses advanced tools and local insights to create <em>efficient, cost-saving solar plans</em> tailored to your roof, energy needs, and goals.
              From concept to connection, we’re your partner in building a sustainable future.
            </>
          }
          imageUrl="/images/solar-panles/residential-solar-installation.jpg"
          imageAlt="Expert Solar System Design Engineers"
          cardTitle="Contact a Solar EXPERT"
          iconClass='fas fa-solar-panel'
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
