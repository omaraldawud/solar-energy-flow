// src/components/AirtableForm.tsx
import React from 'react';

const AirtableForm = () => {
  return (
    <div className="airtable-form-container" style={{ width: '100%', margin: '0 auto' }}>
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/app7xvGRU8J3hHsTe/pagYiOrGoxS4mTxBl/form"
        frameBorder="0"
        width="100%"
        height="533"
        style={{ background: 'transparent', border: '1px solid #ccc' }}
        onWheel={() => {}} // Workaround for iframe wheel event
      ></iframe>
    </div>
  );
};

export default AirtableForm;