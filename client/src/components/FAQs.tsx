import React, { useState } from 'react';
import '../assets/css/FAQs.css';
type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: 'How much can I save with solar panels?',
    answer:
      'Savings depend on your location, energy usage, and system size, but most customers see a significant reduction in their electricity bills.',
  },
  {
    question: 'Do solar panels work on cloudy days?',
    answer:
      'Yes! Solar panels still produce energy on cloudy days, though at a reduced rate compared to sunny days.',
  },
  {
    question: 'What is the installation process like?',
    answer:
      'We start with a consultation and site assessment, design a custom system, handle permitting, and schedule a professional installation.',
  },
  {
    question: 'Are there financing options available?',
    answer:
      'Yes, we offer various financing plans including loans and leases to make solar affordable for everyone.',
  },
  {
    question: 'How long do solar panels last?',
    answer:
      'Solar panels typically have warranties of 25 years but can last much longer with proper maintenance.',
  },
];

export const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faqs py-5" aria-labelledby="faqs-heading">
      <div className="container">
        <h2 id="faqs-heading" className="mb-4 text-center">
          Solar Energy Frequently Asked Questions
        </h2>
        <div className="accordion" id="faqAccordion">
          {faqs.map(({ question, answer }, idx) => (
            <div key={idx} className="accordion-item">
              <h3 className="accordion-header" id={`heading${idx}`}>
                <button
                  className={`accordion-button ${openIndex === idx ? '' : 'collapsed'}`}
                  type="button"
                  aria-expanded={openIndex === idx}
                  aria-controls={`collapse${idx}`}
                  onClick={() => toggleIndex(idx)}
                >
                  {question}
                </button>
              </h3>
              <div
                id={`collapse${idx}`}
                className={`accordion-collapse collapse ${openIndex === idx ? 'show' : ''}`}
                aria-labelledby={`heading${idx}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
