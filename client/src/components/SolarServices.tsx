import { Row, Col, Card } from "react-bootstrap";
import {
  FaHome,
  FaBuilding,
  FaTools,
  FaProjectDiagram,
  FaBatteryFull,
  FaSolarPanel,
} from 'react-icons/fa';
import solarServicesData from '../data/solarServicesData';
import ServiceCard from "./forms-cta-cards/ServiceCard";

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
    <div className="container my-5">
      <Row>
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
