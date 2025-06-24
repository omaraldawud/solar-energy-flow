import React from 'react';
import Hero from '../components/Hero';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaPhone } from 'react-icons/fa';
import '../components/Header.css';
import MainNavigation from '../components/MainNavigation';
import HeaderTop from '../components/HeaderTop';
import Footer from '../components/Footer';
import SolarServices from '../components/SolarServices';

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
      <SolarServices />
      <Footer />
    </div>
    
  );
};

export default Home;
