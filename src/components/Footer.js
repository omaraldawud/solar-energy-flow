import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Container, Row, Col } from 'react-bootstrap';
import FooterContactInfo from './FooterContactInfo';
import { FaPhone } from 'react-icons/fa';
import { COMPANY_NAME, COMPANY_PHONE } from '../data/constants';
/* */
const navLinksMain = [
    { href: "/", label: "HOME" },
    { href: "/contact", label: "CONTACT" },
    { href: "/about-us", label: "ABOUT US" },
];
/* -------------------------------------------- */
/* NAv Links Array */
const navLinksResidential = [
    { href: "/services", label: " Residential Solar Services" },
    { href: "/contact", label: "Home Solar Panel Installation" },
    { href: "/about-us", label: "Battery Storage Solutions" },
    { href: "/about-us", label: "Solar + EV Charger Integration" },
    { href: "/about-us", label: "Monitoring & Maintenance" },
];
const navLinksCommercial = [
    { href: "/solar-panels", label: "Commercial Services" },
    { href: "/solar-array", label: "Business Solar Arrays" },
    { href: "/SolarCarportInstallations", label: "Solar Carport Installations" },
    { href: "/NetMeteringSetup", label: "Net Metering Setup" },
    { href: "/PPA", label: "PPA (Power Purchase Agreements)" },
    { href: "/NetMeteringSetup", label: "Community Solar Programs" },
    { href: "/PPA", label: "Government/Utility Incentive Navigation" },
];
const navSolarProdcuts = [
    { href: "/monocrystallineSolarPanels", label: "Mono-SI" },
    { href: "/Polycrystalline-Solar-Panels ", label: "Poly-SI" },
    { href: "/TFSC", label: "TFSC" },
    { href: "/Thin-Film-Solar-Panels ", label: "PERC" },
    { href: "/SolarTiles", label: "BIPV)" },
];
const navEmergingSolarProdcuts = [
    { href: "/PerovskiteSolarCells", label: "Mono-SI" },
    { href: "/OrganicPhotovoltaics ", label: "OPV" },
];
/* -------------------------------------------- */
const Footer = () => {
    return (_jsxs(_Fragment, { children: [_jsx("footer", { style: { backgroundColor: '#212529', }, className: "text-white py-5 mt-5", children: _jsx(Container, { children: _jsxs(Row, { children: [_jsxs(Col, { md: 4, className: "mb-3", style: { marginTop: '-40px' }, children: [_jsx("img", { src: "/images/solar-energy-flow-tr.png", alt: "Solar Energy Flow Logo", style: { maxWidth: '180px' }, className: "mb-1" }), _jsx("p", { children: "Chicago, Illinois. USA. " }), _jsx(FaPhone, { size: 28, className: "me-3", color: '#E3E1A9' }), _jsx("a", { className: "text-white text-decoration-none", href: "tel:{COMPANY_PHONE}", children: COMPANY_PHONE }), _jsxs("p", { className: "mt-3", style: { color: '#D6D492' }, children: ["At ", COMPANY_NAME, ", we provide expert solar panel installation..."] })] }), _jsxs(Col, { md: 4, className: "mb-3", children: [_jsx("h5", { className: "text-warning", children: "Solar Energy Services" }), _jsxs(Row, { children: [_jsx(Col, { children: _jsx("ul", { className: "list-styled", children: navLinksResidential.map(({ href, label }) => (_jsx("li", { children: _jsx("a", { href: href, className: "text-white text-decoration-none hover-gold", children: label }) }, href))) }) }), _jsx(Col, { children: _jsx("ul", { className: "list-styled", children: navLinksCommercial.map(({ href, label }) => (_jsx("li", { children: _jsx("a", { href: href, className: "text-white text-decoration-none hover-gold", children: label }) }, href))) }) })] })] }), _jsxs(Col, { md: 4, className: "mb-3", children: [_jsx("h5", { className: "text-warning", children: "Stay Connected" }), _jsx(FooterContactInfo, {}), _jsx("ul", { style: {
                                            display: 'flex',
                                            gap: '20px',
                                            paddingLeft: '0',
                                            listStyle: 'none',
                                            margin: '1rem 0 0 0'
                                        }, children: navLinksMain.map(({ href, label }) => (_jsx("li", { children: _jsx("a", { href: href, className: "text-white text-decoration-none hover-gold", children: label }) }, href))) })] })] }) }) }), _jsx("div", { style: {
                    backgroundColor: '#2A3037',
                    width: '100vw',
                    position: 'relative',
                    left: '50%',
                    right: '50%',
                    marginLeft: '-50vw',
                    marginRight: '-50vw'
                }, className: "py-2 text-center text-white small", children: _jsxs("span", { children: ["\u00A9 ", new Date().getFullYear(), " ", COMPANY_NAME, ". Designed and maintained by", ' ', _jsx("a", { href: "https://hostitwise.com", target: "_blank", rel: "noopener noreferrer", className: "text-white text-decoration-underline", children: "Hostitwise.com" })] }) })] }));
};
export default Footer;
