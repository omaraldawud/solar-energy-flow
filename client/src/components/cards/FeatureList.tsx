import React from 'react';

const features = [
  { icon: 'fa-solid fa-award text-warning', label: '25-year Warranty' },
  { icon: 'fa-solid fa-tachometer-alt text-primary', label: '23.5% Efficiency' },
  { icon: 'fa-solid fa-palette text-success', label: 'Full Black Aesthetic' },
  { icon: 'fa-solid fa-hard-hat text-danger', label: 'Built for Harsh Weather' },
];


const FeatureList: React.FC = () => (
  <ul className="list-unstyled d-flex flex-row flex-wrap gap-4 p-0 m-0">
    {features.map(({ icon, label }) => (
      <li key={label} className="d-flex align-items-center text-secondary">
        <i className={`${icon} me-1 fa-fw`} /> {label}
      </li>
    ))}
  </ul>
);

export default FeatureList;
