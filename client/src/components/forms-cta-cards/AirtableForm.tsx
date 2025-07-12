// src/components/AirtableForm.tsx

const AirtableForm = () => {
  return (

      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/app7xvGRU8J3hHsTe/pagYiOrGoxS4mTxBl/form"
        width="100%"
        height="500"
        style={{ 
            background: 'transparent', 
            border: '2px solid #E3E1A9',
            borderRadius: '11px',
          }}
        
        onWheel={() => {}} // Workaround for iframe wheel event
      ></iframe>
  );
};

export default AirtableForm;