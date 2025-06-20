import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCommentDots, FaClock, FaPhoneAlt } from 'react-icons/fa';
import ContactForm from './ContactForm';
import WhyChooseUs from './WhyChooseUs';
import SolarServices from './SolarServices';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="overflow-hidden">
      <div className="container-fluid px-md-5 px-3 py-5">
        <Row className="mx-0">
          {/* Left Content */}
          <Col md={6} className="py-5 p-0">
            {/* ... your left content ... */}
            <div className="mb-4 d-flex align-items-center">
              <img
                decoding="async"
                width="50"
                height="50"
                src="images/leaf-irrigation.png"
                alt=""
              />
              <p className="mb-0 ms-3" style={{ color: '#BCBA63' }}>
                Solar power: Clean, renewable energy for a sustainable future
              </p>
            </div>
            <div className="compute-card">
              <div className="particles"></div>
              <h2>Solar Panel Installation</h2>
              <p className="subtitle">
                At Solar Energy Flow, we deliver <em>state-of-the-art</em>, <em>certified</em> solar panels—engineered for maximum efficiency and <b>approved</b> for sustainable energy excellence.
              </p>
              <div className="highlight">Solar Solutions!</div>
            </div>
            <div
              className="mt-4"
              style={{
                backgroundImage: "url('images/solar-panles/solar-boards-bg.avif')",
                padding: "10px 20px 30px 20px",
                borderRadius: "10px",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <img
                decoding="async"
                width="50"
                height="50"
                src="images/seeding.png"
                alt="Seeding Icon"
              />
              <h2 style={{ margin: '10px 0 35px 0' }}>
                Transforming Energy Consumption with Precision Solar Technology
              </h2>
              <p>
                Expert{' '}
                <a
                  href="/solar-services"
                  className="fs-4 fw-bold"
                  style={{ color: '#007bff', textDecoration: 'none' }}
                >
                  solar solutions
                </a>{' '}
                Transforming Energy Consumption with Precision Solar Technology
              </p>
            </div>
          </Col>

          {/* Right Contact Form */}
          <Col md={6} className="ps-md-5 ps-0">
            <div className="contact-card">
              <h2>Contact Us</h2>
              <ContactForm />
              <div className="mt-2">
                <p><FaCommentDots className="me-2 text-danger" />Contacts - questions or concerns:</p>
                <p><FaClock className="me-2 text-primary" />Chicago Office 08:00am – 04:00pm CSD</p>
                <p><FaPhoneAlt className="me-2 text-primary" />+1 630 800 8077</p>
              </div>
            </div>
          </Col>
        </Row>
        
        {/* WhyChooseUs and SolarServices sections */}
        <Row className="mx-0">
          <Col className="mt-5 px-0">
            <WhyChooseUs />
            <SolarServices />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Hero;
