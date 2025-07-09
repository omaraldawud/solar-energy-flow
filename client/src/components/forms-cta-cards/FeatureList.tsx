import React from 'react';

const features = [
  { icon: 'fa-solid fa-award text-warning', label: '25-year Warranty' },
  { icon: 'fa-solid fa-tachometer-alt text-danger', label: '23.5% Efficiency' },
  { icon: 'fa-solid fa-palette text-dark', label: 'Full Black Aesthetic' },
  { icon: 'fa-solid fa-hard-hat text-secondary', label: 'Built for Harsh Weather' },
];


const FeatureList: React.FC = () => (
  <ul className="list-unstyled feature-list text-dark small">
    {features.map(({ icon, label }) => (
      <li key={label} className="mb-2 d-flex text-dark align-items-center">
        <i className={`${icon} me-3 fa-fw `}  /> {label}
      </li>
    ))}
  </ul>
);

export default FeatureList;
