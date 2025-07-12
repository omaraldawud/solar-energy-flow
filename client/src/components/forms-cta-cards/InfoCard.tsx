import React from 'react';
import FeatureList from './FeatureList';

const InfoCard: React.FC = () => (
  <div className="p-3 rounded-4 text-dark flex-fill">
    <h3 className="fw-bold fs-2">DIRECT ENERGY</h3>
    <p className="text-primary">source directly from solar manufacturers</p>
    <FeatureList />
    <h4 className="mt-5">
      Fast custom designs & full-service equipment procurement
    </h4>
  </div>
);

export default InfoCard;
