import React from 'react';
import { FaSolarPanel } from 'react-icons/fa';
import '../../assets/css/BlackCard.css';

const BlackCard = () => {
  return (
    <div className="black-card">
      <div className="text-center">
        <FaSolarPanel size={40} className="text-success mb-4"/>
        <h3 className="card-title">
          FREE Property Assessment
        </h3>      
        <p className="card-description">
          Leverage the latest solar technology to offset electric use and generate clean, renewable power
        </p>
      </div>

      <div className="d-flex position-relative"> {/* Main container */}
        {/* Left Column */}
        <div className="pe-4" style={{width: '50%'}}>
          <h4 className="fw-bold text-success mb-3">Give Us:</h4>
          <ul className="list-unstyled small">
            <li className="mb-2 text-white d-flex align-items-center">
              <i className="fas fa-house me-3 fa-fw"/>
              <span className="black-box-items">Property Address</span>
            </li>
            <li className="mb-2 text-white d-flex align-items-center">
              <i className="fas fa-file-invoice fa-fw me-3" />
              <span className="black-box-items">Electric Utility Bill</span>
            </li>
          </ul>
        </div>

        {/* Vertical Divider */}
        <div className="position-absolute start-50" style={{
          height: '100%',
          width: '2px',
          backgroundColor: '#198754',
          transform: 'translateX(-50%)'
        }}></div>

        {/* Right Column */}
        <div className="ps-4" style={{width: '50%'}}>
          <h4 className="fw-bold text-success mb-3">Free Quote Includes:</h4>
          <ul className="list-unstyled small">
            <li className="text-white d-flex align-items-center mb-2">
              <i className="fas fa-solar-panel fa-fw me-3" />
              <span className="black-box-items">Rooftop System Design</span>
            </li>
            <li className="mb-2 text-white d-flex align-items-center">
              <i className="fas fa-chart-line fa-fw me-3" />
              <span className="black-box-items">Savings Report</span>
            </li>
            <li className="d-flex text-white align-items-center">
              <i className="fas fa-file-invoice-dollar fa-fw me-3" />
              <span className="black-box-items">Full Project Quote</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-end">  {/* Right-align container */}
        <a href="#" className="learn-more mt-4 d-inline-block">
          Fill out the form to Learn more ›››
        </a>
      </div>
    </div>
  );
};

export default BlackCard;