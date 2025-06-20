import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import seoData from "./data/seoData";
import SEO from "./components/seo-components/SEO";
import Footer from "./components/Footer";
import HeaderTop from "./components/HeaderTop";
import Hero from "./components/Hero";
import SolarServices from './components/SolarServices';
export default function App() {
    return (_jsxs("div", { className: "app-container", children: [_jsx(SEO, { ...seoData.home }), _jsxs("div", { className: "container-fluid p-0", children: [_jsx(HeaderTop, {}), _jsx(Hero, { title: "Power Your Future with Solar Energy", subtitle: "Clean, renewable, affordable.", description: "We help you reduce energy costs and build a sustainable future with certified solar solutions.", imageUrl: "/images/solar-energy-panels.jpg" // Your hero image here
                        , formTitle: "Get Your Free Solar Quote", ctaButtonText: "Contact Us Now" }), _jsx(SolarServices, {}), _jsx(Footer, {})] })] }));
}
