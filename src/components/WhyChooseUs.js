import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaStopwatch, FaTools, FaLeaf, FaHandsHelping } from 'react-icons/fa';
const WhyChooseUs = () => {
    const features = [
        {
            icon: _jsx(FaStopwatch, { size: 40, color: "#6c973d" }),
            title: 'Fast & Reliable Service',
            description: 'We ensure quick response and timely project completion to keep your landscape thriving without delay.'
        },
        {
            icon: _jsx(FaTools, { size: 40, color: "#6c973d" }),
            title: 'Expert Solar Installer',
            description: 'Our team brings years of expertise in designing and installing high-quality, efficient solar systems tailored to your specific needs.'
        },
        {
            icon: _jsx(FaLeaf, { size: 40, color: "#6c973d" }),
            title: 'Eco-Friendly Solutions',
            description: 'At Solar Energy Flow, we prioritize sustainable innovation to reduce environmental impact without compromising performance. Our eco-friendly solutions—from energy-efficient solar panels to smart resource management systems—help businesses and homeowners lower carbon footprints while cutting costs.'
        },
        {
            icon: _jsx(FaHandsHelping, { size: 40, color: "#6c973d" }),
            title: 'Customer-Centered',
            description: 'From consultation to maintenance, our customer-centric approach ensures we listen to your needs and provide personalized solutions for complete customer satisfaction.'
        },
    ];
    return (_jsxs(Container, { className: "py-5 text-center", children: [_jsx("h2", { className: "fw-bold text-light", children: "Why Choose Us" }), _jsx("p", { children: "Let us now emphasize on the main benefits that customers will get using Soalr Energy Flow." }), _jsx("hr", { style: { width: '50%', borderTop: '5px solid #BCBA63', margin: '1rem auto' } }), _jsx(Row, { className: "mt-4", children: features.map((feature, idx) => (_jsx(Col, { md: 3, sm: 6, xs: 12, className: "mb-4", children: _jsxs(Card, { className: "h-100 shadow-sm border-0 rounded p-3", children: [_jsx("div", { className: "bg-light rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center", style: { width: '80px', height: '80px' }, children: feature.icon }), _jsxs(Card.Body, { children: [_jsx(Card.Title, { className: "fw-bold", children: feature.title }), _jsx(Card.Text, { children: feature.description })] })] }) }, idx))) })] }));
};
export default WhyChooseUs;
