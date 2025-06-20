import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Row, Col } from 'react-bootstrap';
import { FaCommentDots, FaClock, FaPhoneAlt } from 'react-icons/fa';
import ContactForm from './ContactForm';
import WhyChooseUs from './WhyChooseUs';
import SolarServices from './SolarServices';
const Hero = () => {
    return (_jsx("section", { id: "hero", className: "overflow-hidden", children: _jsxs("div", { className: "container-fluid px-md-5 px-3 py-5", children: [_jsxs(Row, { className: "mx-0", children: [_jsxs(Col, { md: 6, className: "py-5 p-0", children: [_jsxs("div", { className: "mb-4 d-flex align-items-center", children: [_jsx("img", { decoding: "async", width: "50", height: "50", src: "images/leaf-irrigation.png", alt: "" }), _jsx("p", { className: "mb-0 ms-3", style: { color: '#BCBA63' }, children: "Solar power: Clean, renewable energy for a sustainable future" })] }), _jsxs("div", { className: "compute-card", children: [_jsx("div", { className: "particles" }), _jsx("h2", { children: "Solar Panel Installation" }), _jsxs("p", { className: "subtitle", children: ["At Solar Energy Flow, we deliver ", _jsx("em", { children: "state-of-the-art" }), ", ", _jsx("em", { children: "certified" }), " solar panels\u2014engineered for maximum efficiency and ", _jsx("b", { children: "approved" }), " for sustainable energy excellence."] }), _jsx("div", { className: "highlight", children: "Solar Solutions!" })] }), _jsxs("div", { className: "mt-4", style: {
                                        backgroundImage: "url('images/solar-panles/solar-boards-bg.avif')",
                                        padding: "10px 20px 30px 20px",
                                        borderRadius: "10px",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }, children: [_jsx("img", { decoding: "async", width: "50", height: "50", src: "images/seeding.png", alt: "Seeding Icon" }), _jsx("h2", { style: { margin: '10px 0 35px 0' }, children: "Transforming Energy Consumption with Precision Solar Technology" }), _jsxs("p", { children: ["Expert", ' ', _jsx("a", { href: "/solar-services", className: "fs-4 fw-bold", style: { color: '#007bff', textDecoration: 'none' }, children: "solar solutions" }), ' ', "Transforming Energy Consumption with Precision Solar Technology"] })] })] }), _jsx(Col, { md: 6, className: "ps-md-5 ps-0", children: _jsxs("div", { className: "contact-card", children: [_jsx("h2", { children: "Contact Us" }), _jsx(ContactForm, {}), _jsxs("div", { className: "mt-2", children: [_jsxs("p", { children: [_jsx(FaCommentDots, { className: "me-2 text-danger" }), "Contacts - questions or concerns:"] }), _jsxs("p", { children: [_jsx(FaClock, { className: "me-2 text-primary" }), "Chicago Office 08:00am \u2013 04:00pm CSD"] }), _jsxs("p", { children: [_jsx(FaPhoneAlt, { className: "me-2 text-primary" }), "+1 630 800 8077"] })] })] }) })] }), _jsx(Row, { className: "mx-0", children: _jsxs(Col, { className: "mt-5 px-0", children: [_jsx(WhyChooseUs, {}), _jsx(SolarServices, {})] }) })] }) }));
};
export default Hero;
