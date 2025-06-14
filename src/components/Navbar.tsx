import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Assuming you will or plan to use React Router

export default function SiteNavbar() {
  return (
    <Navbar expand="md" className="solar-navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about-us">About</Nav.Link>
            <Nav.Link as={Link} to="/solar-services">Services</Nav.Link>
            
            <NavDropdown title="Company" id="company-dropdown">
              <NavDropdown.Item as={Link} to="/contact-us">Contact Us</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/careers">Careers</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/privacy-policy">Privacy Policy</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/terms-of-service">Terms of Service</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Resources" id="resources-dropdown">
              <NavDropdown.Item as={Link} to="/blog">Blog</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/faq">FAQ</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Showcase" id="showcase-dropdown">
              <NavDropdown.Item as={Link} to="/testimonials">Testimonials</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/gallery">Gallery</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
