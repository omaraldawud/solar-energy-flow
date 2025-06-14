import { Container, Row, Col, Button } from 'react-bootstrap';
import { Helmet } from "react-helmet-async";
import ContactForm from '../components/ContactForm';
import SiteNavbar from '../components/Navbas';

export default function LandingPage() {
  return (
    <>
      {/* Helmet for SEO */}
          <Helmet>
            <title>Solar Energy Flow | Efficient Solar Energy Solutions</title>
            <meta name="description" content="Solar Energy Flow provides efficient and affordable solar energy solutions for homes and businesses. Contact us at 630-008-077 or info@solarenergyflow.net."
        />
        <meta name="keywords" content="solar energy, solar panels, renewable energy, solar solutions, solar power" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Solar Energy Flow" />
      </Helmet>
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f7f9fb', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#FFC107', padding: '20px 0' }}>
        <Container className="d-flex justify-content-between align-items-center">
          <h1 style={{ margin: 0, color: '#333' }}>Solar Energy Flow</h1>
          <SiteNavbar />
        </Container>
      </header>

      {/* Hero Section */}
{/* Hero Section */}
<section style={{ padding: '80px 0', backgroundColor: '#FFFDE7' }}>
  <Container>
    <Row className="align-items-center justify-content-center">
      {/* Left column: hero text */}
      <Col md={6} style={{ textAlign: 'left' }}>
        <h2 style={{ color: '#333', fontSize: '2.5rem', marginBottom: '20px' }}>
          Power Your Future with Clean Solar Energy
        </h2>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          Affordable, Sustainable, and Smart Solar Solutions for Homes & Businesses.
        </p>
        <Button variant="warning" size="lg" href="#contact" style={{ marginTop: '20px' }}>
          view a full list of our solar energy services.
        </Button>
      </Col>

      {/* Right column: contact form */}
      <Col md={5}>
        <div
          style={{
            backgroundColor: '#fff',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            maxWidth: '450px',
            margin: '0 auto',
          }}
        >
          <h3 style={{ marginBottom: '20px', textAlign: 'center', color: '#333' }}>
            Contact Us
          </h3>
          <ContactForm />
        </div>
      </Col>
    </Row>
  </Container>
</section>


      {/* About Section */}
      <section id="about" style={{ padding: '60px 0' }}>
        <Container>
          <Row>
            <Col md={6}>
              <img src="/images/solar-energy-panels.jpg" alt="residential solar panel installation by Solar Energy Flow" style={{ width: '100%', borderRadius: '8px' }} />
            </Col>
            <Col md={6}>
              <h3>Why Choose Solar Energy Flow?</h3>
              <p>
                We specialize in delivering top-quality solar energy systems that reduce your carbon footprint and lower your energy bills.
                Our experienced team ensures seamless installation, maintenance, and support every step of the way.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section id="services" style={{ backgroundColor: '#FFFDE7', padding: '60px 0' }}>
        <Container>
          <h3 className="text-center mb-4">Our Services</h3>
          <Row>
            <Col md={4} className="text-center mb-3">
              <h5>Residential Solar</h5>
              <p>Custom solar panel solutions designed for your home’s energy needs.</p>
            </Col>
            <Col md={4} className="text-center mb-3">
              <h5>Commercial Solar</h5>
              <p>Power your business sustainably with efficient solar systems.</p>
            </Col>
            <Col md={4} className="text-center mb-3">
              <h5>Maintenance & Support</h5>
              <p>Keep your solar systems running at peak performance all year round.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '60px 0' }}>
        <Container>
          <h3 className="text-center mb-4">Contact Us</h3>
          <p className="text-center">
            Have questions or want a free consultation? Reach out to us today!
          </p>
          <div className="text-center">
            <p><strong>Phone:</strong> <a href="tel:+630008077">630008077</a></p>
            <p><strong>Email:</strong> <a href="mailto:info@solarenergyflow.net">info@solarenergyflow.net</a></p>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#FFC107', padding: '20px 0', textAlign: 'center', color: '#333' }}>
        <Container>
          &copy; {new Date().getFullYear()} Solar Energy Flow. All rights reserved.
        </Container>
      </footer>
    </div>
    </>
  );
}