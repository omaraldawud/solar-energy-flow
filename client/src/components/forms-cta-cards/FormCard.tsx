import React from 'react';
import AirtableForm from '../forms-cta-cards/AirtableForm';

type FormCardProps = {
  cardTitle?: string;
  iconClass?: string;
};

const FormCard: React.FC<FormCardProps> = ({
  cardTitle = 'Get a Free Quote',
  iconClass = 'fas fa-solar-panel',
}) => (
  <div
    className="p-4 shadow rounded h-100 d-flex flex-column justify-content-start"
    style={{
      backgroundImage: "url('/images/solar-battery-system-bg.webp')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <h3 className="h5 mb-4 text-center" style={{ color: 'rgb(0 255 192)' }}>
      <i className={`${iconClass} me-2`} /> {cardTitle}
    </h3>
    <AirtableForm />
  </div>
);

export default FormCard;
