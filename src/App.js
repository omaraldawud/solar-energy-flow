import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import seoData from "./data/seoData";
import SEO from "./components/seo-components/SEO";
import Footer from "./components/Footer";
import HeaderTop from "./components/HeaderTop";
import HeroHome from './components/HeroHome';
export default function App() {
    return (_jsxs("div", { className: "app-container", children: [_jsx(SEO, { ...seoData.home }), _jsxs("div", { className: "container-fluid p-0", children: [_jsx(HeaderTop, {}), _jsx(HeroHome, {}), _jsx(Footer, {})] })] }));
}
