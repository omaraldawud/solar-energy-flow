import { Row, Col, Card } from "react-bootstrap";

import {
  FaHome,
  FaBuilding,
  FaTools,
  FaProjectDiagram,
  FaBatteryFull,
  FaSolarPanel,
} from 'react-icons/fa';
import solarServicesData from '../../data/solarServicesData';
import ServiceCard from "../cards/ServiceCard";

const iconMap: Record<string, JSX.Element> = {
  FaHome: <FaHome size={48} className="text-primary mb-3" />,
  FaBuilding: <FaBuilding size={48} className="text-primary mb-3" />,
  FaTools: <FaTools size={48} className="text-secondary mb-3" />,
  FaProjectDiagram: <FaProjectDiagram size={48} className="text-success mb-3" />,
  FaBatteryFull: <FaBatteryFull size={48} className="text-danger mb-3" />,
  FaSolarPanel: <FaSolarPanel size={48} className="text-warning mb-3" />,
};

const SolarServices = () => {
  return (
    <div id="solar-services" className="container my-5">
      <Row>
        <h2 className="text-success display-5 fw-bold mb-4 position-relative">
          <span className="pulsing-text">
            Solar Services
          </span>
        </h2>
        
        {solarServicesData.map((service) => (
          <Col key={service.id} md={4} className="mb-4">
            <ServiceCard
              imageUrl={service.imageUrl}
              title={service.title}
              description={service.description}
              linkText={service.linkText}
              icon={iconMap[service.icon]}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SolarServices;
