import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Assuming you will or plan to use React Router

export default function SiteNavbar() {
  return (
    <Navbar bg="warning" expand="md" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ color: '#333', fontWeight: 'bold' }}>
          Solar Energy Flow
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" style={{ color: '#333' }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about-us" style={{ color: '#333' }}>About</Nav.Link>
            <Nav.Link as={Link} to="/solar-services" style={{ color: '#333' }}>Services</Nav.Link>
            
            <NavDropdown title="Company" id="company-dropdown" style={{ color: '#333' }}>
              <NavDropdown.Item as={Link} to="/contact-us">Contact Us</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/careers">Careers</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/privacy-policy">Privacy Policy</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/terms-of-service">Terms of Service</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Resources" id="resources-dropdown" style={{ color: '#333' }}>
              <NavDropdown.Item as={Link} to="/blog">Blog</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/faq">FAQ</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Showcase" id="showcase-dropdown" style={{ color: '#333' }}>
              <NavDropdown.Item as={Link} to="/testimonials">Testimonials</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/gallery">Gallery</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
