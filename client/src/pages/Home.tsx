import React from 'react';

//Components
import Hero from '../components/forms-cta-cards/Hero';
import HeaderTop from '../components/header/Header';
import Footer from '../components/footer/Footer';
import SolarServices from '../components/home/SolarServices';
import { FAQs } from '../components/home/FAQs';
import { HowItWorksProcess } from '../components/forms-cta-cards/HowItWorksProcess';


//Style Sheets
import '../assets/css/Header.css'; 
import { HeroMotto } from '@/components/about';
import SEO from '@/components/seo/SEO';


const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Solar Energy Flow | Expert Solar Panel Design & Installation "
        description="Minnesota's trusted solar company offering custom solar panel design & installation. Reduce energy bills with high-efficiency systems. Free consultations!"        keywords="free solar design, custom solar quote, solar panel estimate"
        ogTitle="Minnesota Solar Panel Experts | Solar Energy Flow"
        ogDescription="Get premium solar solutions from Minnesota's top-rated installers. Cut energy costs with our 5-star solar panel systems. Free property assessment!"        ogUrl="https://solarenergyflow.net/free-design"
        ogImage="https://solarenergyflow.net/images/free-solar-og.jpg" // add this image!
      />
    <div className="app-container">
      <HeaderTop />

      <div className="bg-primary text-white py-2">
        <div className="container py-4">
          <HeroMotto 
            title ="Welcome to Solar Energy Flow"
            subtitle="energy sourced directly from solar manufacturers "
            tagline="DIRECT ENERGY"
          />
        </div>
      </div>

      {/* Hero Section */}
      <Hero
          title="Solar Ideas for Better Planet"
          description={
            <>
              At Solar Energy Flow, we specialize in <strong>custom solar system design</strong> for Minnesota homes and businesses. 
              Our team of experts uses advanced tools and local insights to create <em>efficient, cost-saving solar plans</em> tailored to your roof, energy needs, and goals.
              From concept to connection, we’re your partner in building a sustainable future.
            </>
          }
          cardTitle="Contact a Solar EXPERT"
          iconClass='fas fa-solar-panel'
        />

      {/* <HowItWorks /> */}
      <HowItWorksProcess variant="full"/>
      <SolarServices />
      <FAQs />
      <Footer />

    </div>
           </>
  );
};

export default Home;
