import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Row, Col, Card } from "react-bootstrap";
import { FaHome, FaBuilding, FaTools } from "react-icons/fa";
import solarServicesData from '../data/solarServicesData';
const iconMap = {
    FaHome: _jsx(FaHome, { size: 48, className: "text-primary mb-3" }),
    FaBuilding: _jsx(FaBuilding, { size: 48, className: "text-primary mb-3" }),
    FaTools: _jsx(FaTools, { size: 48, className: "text-primary mb-3" }),
};
const SolarServices = () => {
    return (_jsx("div", { className: "container my-5", children: _jsx(Row, { children: solarServicesData.map((service) => (_jsx(Col, { md: 4, className: "mb-4", children: _jsxs(Card, { className: "h-100 border-0 shadow-sm", children: [_jsx(Card.Img, { variant: "top", src: service.imageUrl, alt: service.title, style: { height: '200px', objectFit: 'cover' } }), _jsxs(Card.Body, { className: "text-center p-4", children: [iconMap[service.icon], _jsx(Card.Title, { as: "h3", className: "h4 mb-3", children: service.title }), _jsx(Card.Text, { className: "mb-4", children: service.description }), _jsx("a", { href: "#", className: "text-primary text-decoration-none fw-bold", children: service.linkText })] })] }) }, service.id))) }) }));
};
export default SolarServices;
