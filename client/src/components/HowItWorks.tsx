import React from 'react';

//CSS
import '../assets/css/HowItWorks.css';

type Step = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width={48}
        height={48}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 10h.01M12 10h.01M16 10h.01M9 16h6M12 20c4.418 0 8-1.79 8-4v-4a4 4 0 00-8 0v4c0 1.04-.566 2-1.5 2z"
        />
      </svg>
    ),
    title: 'Consultation',
    description:
      'Speak with our solar experts to evaluate your energy needs and understand the benefits.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width={48}
        height={48}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 7v4a4 4 0 004 4h8a4 4 0 004-4V7M12 3v4m0 0L8 7m4 0l4-4"
        />
      </svg>
    ),
    title: 'Design',
    description:
      'Our team creates a customized solar system design tailored for your home and budget.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width={48}
        height={48}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 10h18M9 21V3m6 18V3"
        />
      </svg>
    ),
    title: 'Installation',
    description:
      'Certified installers will set up your solar panels quickly and efficiently.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width={48}
        height={48}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m-6 0a9 9 0 1118 0 9 9 0 01-18 0z"
        />
      </svg>
    ),
    title: 'Savings',
    description:
      'Start enjoying lower energy bills and a greener footprint with your new solar system.',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="how-it-works py-5" aria-label="How It Works Process Overview">
      <div className="container">
        <h2 className="mb-4 text-center">How It Works</h2>
        <div className="row text-center">
          {steps.map(({ icon, title, description }, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="step-icon mb-3 text-primary">{icon}</div>
              <h3 className="h5">{title}</h3>
              <p className="text-muted">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
