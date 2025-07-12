// src/components/about/MissionSection.tsx
export const MissionSection = () => {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title h4 mb-4">Our Mission</h2>
        
        <p className="card-text text-muted mb-4">
          At Solar Energy Flow, our mission is to make renewable energy accessible to every homeowner 
          while providing exceptional service and quality installations that stand the test of time.
        </p>
        
        <div className="bg-primary bg-opacity-10 border-start border-primary border-4 p-3 mb-4">
          <p className="text-primary fst-italic fw-medium mb-0">
            "Innovative Energy for an Evolving World"
          </p>
        </div>
        
        <div className="row g-3">
          <div className="col-md-6">
            <div className="bg-light p-3 rounded h-100">
              <h3 className="h5 text-dark mb-2">Our Approach</h3>
              <p className="text-muted mb-0">
                We combine cutting-edge technology with personalized service to deliver solar solutions 
                that are efficient, affordable, and tailored to your home's needs.
              </p>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="bg-light p-3 rounded h-100">
              <h3 className="h5 text-dark mb-2">Our Promise</h3>
              <p className="text-muted mb-0">
                From initial consultation to final inspection, we handle every detail with the utmost 
                professionalism and care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};