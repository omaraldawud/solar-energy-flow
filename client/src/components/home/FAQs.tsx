import { Tabs, Tab, Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { FaSun, FaUserCog, FaSolarPanel, FaRulerCombined, FaPiggyBank } from 'react-icons/fa';

import {  solarFaqs, 
          installerFaqs, 
          designFaqs, 
          SolarIncentivesFAQs, 
          SolarPanelInstallationFAQs
      } from '../../data/faqData';

import '../../assets/css/FAQs.css'


const renderFAQList = (faqs: any[]) => (
  <Accordion defaultActiveKey="">
    {faqs.map((faq, idx) => (
      <Accordion.Item eventKey={String(idx)} key={idx}>
        <Accordion.Header>{faq.question}</Accordion.Header>
        <Accordion.Body>{faq.answer}</Accordion.Body>
      </Accordion.Item>
    ))}
  </Accordion>
);


export const FAQs = () => (
  <section className="py-5 bg-light" id="faqs">
    <Container
      style={{
        background: "linear-gradient(to bottom right, #ffffff, #f1fdfc)",
        padding: "2rem",
        borderRadius: "1rem",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
        transition: "box-shadow 0.3s ease-in-out",
      }}
    >
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      <Tabs
        defaultActiveKey="solar"
        id="faq-tabs"
        className="mb-3 d-flex flex-wrap justify-content-start"
      >
        <Tab eventKey="solar" 
            title={
              <span>
                    <FaSun  className="me-2 text-dark"/>
                    Solar Energy
              </span>
            }
          >
          {renderFAQList(solarFaqs)}
        </Tab>
        <Tab  eventKey="installers" 
              title={
                <span>
                  <FaUserCog className="me-2 text-dark"/>
                  Installer Partners
                </span>
          }
        >
          {renderFAQList(installerFaqs)}
        </Tab>
        <Tab  eventKey="design" 
              title={
                <span>
                  <FaRulerCombined className="me-2 text-dark"/>
                  System Design
                </span>
               }
          >
                
          {renderFAQList(designFaqs)}
        </Tab>        
        <Tab  eventKey="installation" 
              title={
              <span>
                  <FaSolarPanel className="me-2 text-dark" />
                  Solar Panel Installation
                </span>
              }
        >
              
          {renderFAQList(SolarPanelInstallationFAQs)}
        </Tab>
                <Tab eventKey="incentives" 
            title={
                <span>
                  <FaPiggyBank className="me-2 text-success"/>
                  Solar Incentives
                </span>
               }
            > 
          {renderFAQList(SolarIncentivesFAQs)}
        </Tab>
      </Tabs>
    </Container>
  </section>
);
