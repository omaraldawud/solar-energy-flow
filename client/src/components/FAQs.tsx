import { Tabs, Tab, Container } from 'react-bootstrap';
import { solarFaqs, installerFaqs, designFaqs, SolarIncentivesFAQs } from '../data/faqData';
import '../assets/css/FAQs.css'

import Accordion from 'react-bootstrap/Accordion';

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
        className="mb-3 justify-content-start"
      >
        <Tab eventKey="solar" title="Solar Energy">
          {renderFAQList(solarFaqs)}
        </Tab>
        <Tab eventKey="installers" title="Installer Partners">
          {renderFAQList(installerFaqs)}
        </Tab>
        <Tab eventKey="design" title="System Design">
          {renderFAQList(designFaqs)}
        </Tab>
        <Tab eventKey="incentives" title="Solar Incentives">
          {renderFAQList(SolarIncentivesFAQs)}
        </Tab>
      </Tabs>
    </Container>
  </section>
);
