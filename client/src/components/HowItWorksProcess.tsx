import React from 'react';
import '../assets/css/HowItWorks.css';
import { steps } from './steps';

interface HowItWorksProcessProps {
  variant?: 'full' | 'compact'; // Add variant prop
}


export const HowItWorksProcess: React.FC<HowItWorksProcessProps> = ({
      variant = 'full' // Default to full version
      }) => {

  return (
    <section className="how-it-works mt-5 p-4" aria-label="Our Solar Panel System Installtion Process">
      <div className="container">
        <h2 className="mb-4 text-center">Our Solar Panel System Installtion Process</h2>
        <div className="row text-center">
          {steps.map(({ icon, title, description }, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4 col-xl-2 mb-4">
              {variant === 'full' && (
                <div className="step-number mb-2 text-primary">{idx + 1}</div>
              )}
              <div className="step-icon mb-3 text-primary">{icon}</div>
              <h3 className="h5">{title}</h3>
              {variant === 'full' && (
                <p className="text-muted">{description}</p>
              )}
            </div>
          ))}
          
          {variant === 'full' && (
            <div className="text-center">
              <p className="highlight-box">
                <strong style={{color:'#1bbfff'}}>Featured Partnership:</strong> All installations are performed by our network of 
                <strong> certified Minnesota solar installers</strong> for guaranteed quality.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};