import { Container, Row, Col, Button } from 'react-bootstrap';

export default function LandingPage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f7f9fb', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#FFC107', padding: '20px 0' }}>
        <Container className="d-flex justify-content-between align-items-center">
          <h1 style={{ margin: 0, color: '#333' }}>Solar Energy Flow</h1>
          <nav>
            <a href="#about" style={{ margin: '0 15px', color: '#333', textDecoration: 'none' }}>About</a>
            <a href="#services" style={{ margin: '0 15px', color: '#333', textDecoration: 'none' }}>Services</a>
            <a href="#contact" style={{ margin: '0 15px', color: '#333', textDecoration: 'none' }}>Contact</a>
          </nav>
        </Container>
      </header>

      {/* Hero Section */}
      <section style={{ padding: '80px 0', textAlign: 'center', backgroundColor: '#FFFDE7' }}>
        <Container>
          <h2 style={{ color: '#333', fontSize: '2.5rem', marginBottom: '20px' }}>
            Power Your Future with Clean Solar Energy
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#555' }}>
            Affordable, Sustainable, and Smart Solar Solutions for Homes & Businesses.
          </p>
          <Button variant="warning" size="lg" href="#contact" style={{ marginTop: '20px' }}>
            Get a Free Quote
          </Button>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '60px 0' }}>
        <Container>
          <Row>
            <Col md={6}>
              <img src="/images/solar-panels.jpg" alt="Solar Panels" style={{ width: '100%', borderRadius: '8px' }} />
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
  );
}
