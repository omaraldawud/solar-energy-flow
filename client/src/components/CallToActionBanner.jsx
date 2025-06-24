import React from 'react';
import { Container, Button } from 'react-bootstrap';

const CallToActionBanner = () => {
  return (
    <Container >
      <div className="header-promo-image d-none d-lg-block ms-3">
          <img
            src="/images/join-the-solar-revolution.jpg"
            alt="Join the Solar Revolution"
            style={{
              maxHeight: '60px',
              borderRadius: '4px',
              border: '2px solid #FFC523'
            }}
          />
      </div>
    </Container>
  );
};

export default CallToActionBanner;