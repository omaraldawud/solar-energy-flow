import React from 'react';
import { FaSolarPanel } from 'react-icons/fa';
import '../../assets/css/BlackCard.css';

const BlackCard = () => {
  return (
    <div className="black-card">
      <div className="icon-wrapper">
        <FaSolarPanel size={40} color="#ffffff" />
      </div>
      <h3 className="card-title">Utility scale solar</h3>
      <p className="card-description">
        Leverage the latest solar technology to offset electric use and generate clean, renewable power
      </p>
      <a href="#" className="learn-more">
        Learn more <span className="arrow">›</span>
      </a>
    </div>
  );
};

export default BlackCard;
