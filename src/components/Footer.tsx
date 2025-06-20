import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FooterContactInfo from './FooterContactInfo';
import { FaPhone } from 'react-icons/fa';
import { COMPANY_NAME, COMPANY_PHONE } from '../constants';

/* */
const navLinksMain = [
    { href: "/", label: "HOME"},
    { href: "/contact", label: "CONTACT" },
    { href: "/about-us", label: "ABOUT US"},
  ];
/* -------------------------------------------- */
/* NAv Links Array */
const navLinksResidential = [
    { href: "/services", label: " Residential Solar Services"},
    { href: "/contact", label: "Home Solar Panel Installation" },
    { href: "/about-us", label: "Battery Storage Solutions"},
    { href: "/about-us", label: "Solar + EV Charger Integration"},
    { href: "/about-us", label: "Monitoring & Maintenance"},
  ];

  const navLinksCommercial = [
    { href: "/solar-panels", label: "Commercial Services" },
    { href: "/solar-array", label: "Business Solar Arrays" },
    { href: "/SolarCarportInstallations", label: "Solar Carport Installations" },
    { href: "/NetMeteringSetup", label: "Net Metering Setup" },
    { href: "/PPA", label: "PPA (Power Purchase Agreements)" },    
    { href: "/NetMeteringSetup", label: "Community Solar Programs" },
    { href: "/PPA", label: "Government/Utility Incentive Navigation" },
  ];

const navSolarProdcuts = [
    { href: "/monocrystallineSolarPanels", label: "Mono-SI" },
    { href: "/Polycrystalline-Solar-Panels ", label: "Poly-SI" },
    { href: "/TFSC", label: "TFSC" },
    { href: "/Thin-Film-Solar-Panels ", label: "PERC" } ,
    { href: "/SolarTiles", label: "BIPV)" } ,
  ];

const navEmergingSolarProdcuts = [
    { href: "/PerovskiteSolarCells", label: "Mono-SI" },
    { href: "/OrganicPhotovoltaics ", label: "OPV" },

  ];
/* -------------------------------------------- */

const Footer: React.FC = () => {
  return (
    <>
      <footer style={{ 
        backgroundColor: '#161D21',
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw'
      }} className="text-white py-5 mt-5">
        <Container>
          <Row>
            {/* Logo & Contact */}
            <Col md={4} className="mb-3" style={{ marginTop: '-40px' }}>
              <img
                src="https://solarenergyflow.net/images/solar-energy-flow-tr.png"
                alt="Solar Energy Flow Logo"
                style={{ maxWidth: '180px' }}
                className="mb-1"
              />
              <p>Chicago, Illinois</p>
              <FaPhone size={28} className="me-3" color='#E3E1A9'/>
              {COMPANY_PHONE}
              <p className="mt-3" style={{ color: '#D6D492' }}>
                At {COMPANY_NAME}, we provide expert solar panel installation...
              </p>
            </Col>

            {/* Services Links */}
            <Col md={4} className="mb-3">
              <h5 className="text-warning">Solar Energy Services</h5>
              <Row>
                <Col>
                  <ul className="list-styled">
                    {navLinksResidential.map(({ href, label }) => (
                      <li key={href}>
                        <a href={href} className="text-white text-decoration-none hover-gold">
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </Col>
                <Col>
                  <ul className="list-styled">
                    {navLinksCommercial.map(({ href, label }) => (
                      <li key={href}>
                        <a href={href} className="text-white text-decoration-none hover-gold">
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </Col>

            {/* Social Links */}
            <Col md={4} className="mb-3">
              <h5 className="text-warning">Stay Connected</h5>
              <FooterContactInfo />
              <ul style={{
                display: 'flex',
                gap: '20px',
                paddingLeft: '0',
                listStyle: 'none',
                margin: '1rem 0 0 0'
              }}>
                {navLinksMain.map(({ href, label }) => (
                  <li key={href}>
                    <a href={href} className="text-white text-decoration-none hover-gold">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Bottom Bar */}
      <div style={{ 
        backgroundColor: '#2A3037',
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw'
      }} className="py-2 text-center text-white small">
        <span>
          &copy; {new Date().getFullYear()} {COMPANY_NAME}. Designed and maintained by{' '}
          <a href="https://hostitwise.com" target="_blank" rel="noopener noreferrer" 
             className="text-white text-decoration-underline">
            Hostitwise.com
          </a>
        </span>
      </div>
    </>
  );
};

export default Footer;