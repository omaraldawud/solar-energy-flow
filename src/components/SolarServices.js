import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Row, Col, Card } from "react-bootstrap";
import { FaHome, FaBuilding, FaTools } from "react-icons/fa";
const SolarServices = () => {
    const services = [
        {
            id: 1,
            title: "Residential Solar Installation",
            icon: _jsx(FaHome, { size: 48, className: "text-primary mb-3" }),
            description: "Turnkey solar solutions for homeowners with premium panels, battery storage options, and smart energy monitoring.",
            linkText: "Explore home solutions >",
            imageUrl: "/images/solar-panles/solar-panel-installation.jpg"
        },
        {
            id: 2,
            title: "Commercial Solar Systems",
            icon: _jsx(FaBuilding, { size: 48, className: "text-primary mb-3" }),
            description: "Custom-designed solar arrays for businesses to reduce operational costs and meet sustainability goals.",
            linkText: "See business benefits >",
            imageUrl: "/images/solar-panles/commercial-solar-installation.jpg"
        },
        {
            id: 3,
            title: "Solar Maintenance Plans",
            icon: _jsx(FaTools, { size: 48, className: "text-primary mb-3" }),
            description: "Proactive cleaning, performance checks, and repairs to maximize your system's efficiency and lifespan.",
            linkText: "View maintenance packages >",
            imageUrl: "/images/solar-panles/solar-maintenance.jpg"
        }
    ];
    return (_jsx("div", { className: "container my-5", children: _jsx(Row, { children: services.map((service) => (_jsx(Col, { md: 4, className: "mb-4", children: _jsxs(Card, { className: "h-100 border-0 shadow-sm", children: [_jsx(Card.Img, { variant: "top", src: service.imageUrl, alt: service.title, style: { height: '200px', objectFit: 'cover' } }), _jsxs(Card.Body, { className: "text-center p-4", children: [service.icon, _jsx(Card.Title, { as: "h3", className: "h4 mb-3", children: service.title }), _jsx(Card.Text, { className: "mb-4", children: service.description }), _jsx("a", { href: "#", className: "text-primary text-decoration-none fw-bold", children: service.linkText })] })] }) }, service.id))) }) }));
};
export default SolarServices;
