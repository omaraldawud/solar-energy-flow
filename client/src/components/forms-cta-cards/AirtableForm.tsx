// src/components/AirtableForm.tsx
import React from 'react';

const AirtableForm = () => {
  return (
    <div className="airtable-form-container" style={{ width: '100%', margin: '0 auto' }}>
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/app7xvGRU8J3hHsTe/pagYiOrGoxS4mTxBl/form"
        width="100%"
        height="700"
        style={{ 
            background: 'transparent', 
            border: '2px solid #E3E1A9',
            borderRadius: '11px',
          }}
        
        onWheel={() => {}} // Workaround for iframe wheel event
      ></iframe>
    </div>
  );
};

export default AirtableForm;