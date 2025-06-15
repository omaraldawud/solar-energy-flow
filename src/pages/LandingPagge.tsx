import SEO from "../components/SEO";
import { Container, Row, Col, Button } from "react-bootstrap";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";

export default function LandingPage() {
  return (
    <>
      {/* SEO Component for the HOME Page*/}
      <SEO
        title="Solar Energy Flow | Efficient Solar Energy Solutions"
        description="Solar Energy Flow provides efficient and affordable solar energy solutions for homes and businesses."
        keywords="solar energy, solar panels, renewable energy, solar solutions, solar power"
        image="/images/social-share-image.jpg"
        url="https://solarenergyflow.net"
      />

      <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f7f9fb", minHeight: "100vh" }}>
        <Header />

        {/* Rest of the Landing Page content */}
        <section style={{ padding: "80px 0", backgroundColor: "#FFFDE7" }}>
          <Container>
            <Row className="align-items-center justify-content-center">
              <Col md={6} style={{ textAlign: "left" }}>
                <h2 style={{ color: "#333", fontSize: "2.5rem", marginBottom: "20px" }}>
                  Power Your Future with Clean Solar Energy
                </h2>
                <p style={{ fontSize: "1.2rem", color: "#555" }}>
                  Affordable, Sustainable, and Smart Solar Solutions for Homes & Businesses.
                </p>
                <Button variant="warning" size="lg" href="#contact" style={{ marginTop: "20px" }}>
                  View a full list of our solar energy services.
                </Button>
              </Col>
              <Col md={5}>
                <div
                  style={{
                    backgroundColor: "#fff",
                    padding: "30px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    maxWidth: "450px",
                    margin: "0 auto",
                  }}
                >
                  <h3 style={{ marginBottom: "20px", textAlign: "center", color: "#333" }}>Contact Us</h3>
                  <ContactForm />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}

