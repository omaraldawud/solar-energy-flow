import React from 'react';

import { steps } from '../steps';

interface HowItWorksProcessProps {
  variant?: 'full' | 'compact' | 'services'; // Add variant prop
  title: string;
}


export const HowItWorksProcess: React.FC<HowItWorksProcessProps> = ({
      variant = 'full', // Default to full version
      title = "Our Solar Panel System Installtion Process"
      }) => {

        console.log('Received props:', { variant, title }); // Add at top of component

  return (
    <section className="how-it-works mt-5 p-4" aria-label="Our Solar Panel System Installtion Process">
      <div className="container">
        {variant === 'full' && (
              <h2 className="mb-4 text-center">{title}</h2>
          )}
          <div className="row text-center">
          {steps.map(({ icon, title, description }, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4 col-xl-2 position-relative">
              {/* Arrow between steps (except last one) */}
              {idx < steps.length && (
                <div className="step-arrow d-none d-md-block">
                  <i className="fas fa-arrow-right text-success "></i>
                </div>
              )}

            {/* Existing step content */}

            <div className="step-icon mb-3 text-secondary">{icon}</div>
            <h3 className="h5">{title}</h3>
            {variant === 'full' && (
              <p className="text-muted">{description}</p>
            )}
  </div>
))}
          
          {(variant === 'full' || variant === 'services') && (
            <div className="text-center mt-4">
              <p className="highlight-box">
                <strong style={{color:'#1bbfff'}}>Featured Partnership:</strong> All installations are performed by our network of 
                <strong> certified solar installers</strong> for guaranteed quality.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};