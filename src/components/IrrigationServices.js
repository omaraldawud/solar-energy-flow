import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Row, Col, Card } from "react-bootstrap";
import { FaWater, FaWrench, FaShower } from "react-icons/fa";
const IrrigationServices = () => {
    const services = [
        {
            id: 1,
            title: "Irrigation System Installations",
            icon: _jsx(FaWater, { size: 48, className: "text-primary mb-3" }),
            description: "Fixing leaks, broken sprinkler heads, or malfunctioning valves. Seasonal maintenance such as winterization and spring startup, irrigation system inspection/repairs and back-flow services.",
            linkText: "read more >",
            imageUrl: "images/irrigation-services.jpg"
        },
        {
            id: 2,
            title: "Irrigation System Inspection & Repairs",
            icon: _jsx(FaWrench, { size: 48, className: "text-primary mb-3" }),
            description: "Retrofitting old systems with modern, water-efficient components. Smart controller integration for remote monitoring and management. Inspection & Repairs.",
            linkText: "read more >",
            imageUrl: "images/irrigation-services.jpg"
        },
        {
            id: 3,
            title: "Back-flow Irrigation Services",
            icon: _jsx(FaShower, { size: 48, className: "text-primary mb-3" }),
            description: "Installation and maintenance of drip irrigation systems for precise water delivery to plants, ensuring efficient water use and healthy plant growth.",
            linkText: "read more >",
            imageUrl: "images/irrigation-services.jpg"
        }
    ];
    return (_jsx("div", { className: "container my-5", children: _jsx(Row, { children: services.map((service) => (_jsx(Col, { md: 4, className: "mb-4", children: _jsxs(Card, { className: "h-100 border-0 shadow-sm", children: [_jsx(Card.Img, { variant: "top", src: service.imageUrl, alt: service.title, style: { height: '200px', objectFit: 'cover' } }), _jsxs(Card.Body, { className: "text-center p-4", children: [service.icon, _jsx(Card.Title, { as: "h3", className: "h4 mb-3", children: service.title }), _jsx(Card.Text, { className: "mb-4", children: service.description }), _jsx("a", { href: "#", className: "text-primary text-decoration-none fw-bold", children: service.linkText })] })] }) }, service.id))) }) }));
};
export default IrrigationServices;
