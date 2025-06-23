import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone } from 'react-icons/fa';
import MainNavigation from './MainNavigation';
const Header = () => {
    return (_jsx("header", { className: "sticky-top bg-dark text-white py-3 shadow-sm", children: _jsx(Container, { fluid: true, children: _jsxs(Row, { className: "align-items-center", children: [_jsxs(Col, { xs: 6, md: 4, className: "d-flex align-items-center", children: [_jsx("img", { src: "/images/solar-energy-flow-tr.png", alt: "Solar Energy Flow Logo", style: { maxWidth: '50px' }, className: "me-2" }), _jsx("span", { className: "fs-4 fw-bold", style: { color: '#F7CA4D' }, children: "Solar Energy Flow" })] }), _jsxs(Col, { xs: 6, md: 4, className: "d-flex justify-content-center align-items-center", children: [_jsx(FaPhone, { size: 20, className: "me-2", color: "#F7CA4D" }), _jsx("a", { href: "tel:+16308008077", className: "text-white text-decoration-none fs-5", children: "+1 630 800 8077" })] }), _jsx(Col, { xs: 12, md: 4, className: "d-flex justify-content-md-end justify-content-center mt-3 mt-md-0", children: _jsx(MainNavigation, {}) })] }) }) }));
};
export default Header;
