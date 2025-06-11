import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { FaPhone, FaMapMarkerAlt, FaClock, FaCommentDots, FaWater, FaPhoneAlt } from 'react-icons/fa';
import ContactForm from './ContactForm';
import WhyChooseUs from './WhyChooseUs';
import IrrigationServices from './IrrigationServices';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"

    >
      <div className="container py-5">
        <Row>
          {/* Left Content */}
          <Col md={6} className="d-flex flex-column justify-content-start">
            <div className="mb-4 flex align-items-center">
              <div className="mb-4 d-flex align-items-center">
                  <img
                    decoding="async"
                    width="50"
                    height="50"
                    className="wp-image-1339"
                    style={{ width: '50px' }}
                    src="images/leaf-irrigation.png"
                    alt=""
                  />
                  <p className="highlight-blue mb-0 ms-3" style={{color:'#BCBA63'}}>
                    A Garden Like Never Before
                  </p>
              </div>
            </div>
            <h2 className="fw-bold" style={{ fontSize: '4rem', fontWeight: 700 }}>Pacific Northwest Irrigation</h2>
            <p className="lead mt-3 lead-on-green">
              <span className="highlight-blue">At Pacific Northwest Irrigation</span>, we specialize in designing,
              installing, and maintaining efficient, eco-friendly irrigation
              systems tailored to the unique needs of the Pacific Northwest,
              backed by years of expertise in sustainable water management.
            </p>

            <div  className="mt-4  align-items-center " 
                  style={{ 
                            backgroundImage: "url('images/watering-garden.jpg')", 
                            padding: "10px 20px 30px 20px", 
                            borderRadius: "10px", backgroundSize: "cover", backgroundPosition: "center" }}>
                <img
                    decoding="async"
                    width="50"
                    height="50"
                    className="wp-image-1339"
                    style={{ width: '50px'  }}
                    src="images/seeding.png"
                    alt="Seeding Icon"
                />
                <h2 style={{ margin: '10px 0 35px 0' }}>Transforming Your Outdoor Oasis with Precision</h2>
                <p>Expert <a href="/irrigation-services" className="fs-4 fw-bold"   style={{ color: '#007bff', textDecoration: 'none', marginTop: '20px' }}>
                              irrigation solutions</a> designed to nurture your landscape, conserve resources, and enhance the beauty of your outdoor spaces.</p>
            </div>
          </Col>


          {/* Right Contact Form */}
          <Col md={6}>
            <div className="bg-light bg-opacity-75 text-dark p-4 rounded">
              <h2 className="text-success mb-4">Contact Us</h2>
              <ContactForm />

              {/* Extra Info */}
              <div className="mt-4">
                <p><FaCommentDots className="me-2 text-danger" />Here’s how you can contact us for any questions or concerns:</p>
                <p><FaMapMarkerAlt className="me-2 text-primary" />2360 Hood Avenue, San Diego, CA, 92123</p>
                <p><FaClock className="me-2 text-primary" />08:00 AM – 04:00 PM</p>
                <p><FaPhoneAlt className="me-2 text-primary" />+1 334 422 2211</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-5">
            <WhyChooseUs />
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-5">
            <IrrigationServices />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Hero;
