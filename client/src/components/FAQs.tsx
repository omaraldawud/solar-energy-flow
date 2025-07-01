// src/components/FAQsTabbed.tsx
import { Tabs, Tab, Container } from 'react-bootstrap';
import { solarFaqs, installerFaqs, designFaqs } from '../data/faqData';
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
    <Container>
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
      </Tabs>
    </Container>
  </section>
);


