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

      <h4 className="fw-bold text-success mt-2 mb-3">Give Us:</h4>
      <ul className="list-unstyled small">
        <li className="mb-2 text-white d-flex align-items-center">
          <i className="fas fa-house me-3 fa-fw"/>
            <span className="black-box-items">Property Address</span>
        </li>
        <li className="mb-2 text-white d-flex align-items-center">
          <i  className="fas fa-file-invoice fa-fw me-3" />
              <span className="black-box-items">&nbsp;Electric Utiltiy Bill</span>
        </li>
      </ul>
      <h4 className="fw-bold text-success mt-2 mb-3">Free Quote Includes:</h4>
      <ul className="list-unstyled small mb-4">
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

      <a href="#" className="learn-more">
        Fill out the form to Learn more ›››
      </a>
    </div>
  );
};

export default BlackCard;
