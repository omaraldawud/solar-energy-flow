// src/components/about/WhoWeAreCard.tsx
export const WhoWeAreCard = () => {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        {/* Header - unchanged */}
        <div className="d-flex align-items-center mb-3">
          <div className="bg-danger bg-opacity-10 p-3 rounded-circle me-3">
            <i className="bi bi-shield-check text-danger fs-3"></i>
          </div>
          <h2 className="card-title h4 mb-0">Who We Are</h2>
        </div>
        
        {/* Body text - unchanged */}
        <p className="card-text text-muted mb-3">
          We are a proud veteran-owned company driven by integrity, excellence, and a commitment to 
          sustainable energy solutions.
        </p>
        
        <p className="card-text text-muted">
          Founded by service members who understand discipline and dedication, we bring military precision 
          to every solar installation.
        </p>
        
        {/* Veteran badge - Bootstrap-only styling */}
        <div className="mt-4 pt-3 border-top border-warning border-opacity-25">
          <div className="d-flex align-items-center bg-danger bg-opacity-10 px-3 py-2 rounded-3">
            <i className="bi bi-star-fill text-danger fs-5 me-2"></i>
            <span className="fw-bold text-danger bg-white bg-opacity-90 px-3 py-1 rounded-pill border border-2 border-danger text-uppercase tracking-wide">
              VETERAN-OWNED BUSINESS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};