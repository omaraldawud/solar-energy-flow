import React from 'react';

const features = [
  { icon: 'fas fa-award', label: '25-year Warranty' },
  { icon: 'fas fa-tachometer-alt', label: '23.5% Efficiency' },
  { icon: 'fas fa-palette', label: 'Full Black Aesthetic' },
  { icon: 'fas fa-hard-hat', label: 'Built for Harsh Weather' },
];

const FeatureList: React.FC = () => (
  <ul className="list-unstyled feature-list text-dark small">
    {features.map(({ icon, label }) => (
      <li key={label} className="mb-2 d-flex align-items-center">
        <i className={`${icon} me-3 fa-fw`} /> {label}
      </li>
    ))}
  </ul>
);

export default FeatureList;
