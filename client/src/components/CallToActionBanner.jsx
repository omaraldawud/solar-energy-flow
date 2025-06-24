import React from 'react';
import { Container, Button } from 'react-bootstrap';

const CallToActionBanner = () => {
  return (
    <Container >
      <div>        
          <Button 
            variant="outline-light" 
            style={{ 
              borderRadius: '15px 0 15px 0',
              backgroundColor: '#ff8d29',
              border: '2px solid white',
              color: 'white',
              padding: '12px 24px',
              fontSize: '1.3rem',  
              fontWeight: '700',  
              lineHeight: '1.4',   
              letterSpacing: '0.1rem'
            }}>
            Join Us in Making <br />a Difference!<br />+1 (630) 800-8077 <i className="fas fa-hands-helping ms-4"></i>
          </Button>

      </div>
    </Container>
  );
};

export default CallToActionBanner;