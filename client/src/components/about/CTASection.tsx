// src/components/about/CTASection.tsx
import { useState } from 'react';

export const CTASection = () => {
  const [address, setAddress] = useState('');

  return (
    <div className="card shadow border-0">
      <div className="card-body p-5 bg-dark text-white rounded">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="h1 mb-4">Ready to Save with Solar?</h2>
            <p className="lead mb-5">
              Going Solar Has Never Been Easier.
            </p>
            <p>You send your address and electric bill — we'll handle the rest!<br />
                We manage everything from design to installing high efficiency solar panels.
                 It's FAST, SIMPLE and built to save you money for years to come.
            </p>
            
            <a href="/free-solar-system-design">
              <button type="button" className="btn btn-warning btn-lg w-50">
                Get Started Today
              </button>
            </a>
            <div className="mt-5">
              <div className="row g-3">
                {['No Upfront Costs', '30% Tax Credit', '25-Year Warranty'].map((item) => (
                  <div key={item} className="col-md-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <i className="bi bi-check-circle-fill text-warning me-2"></i>
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};