import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import './App.css';
import SEO from "./components/seo-components/SEO";
import seoData from "./data/seoData";
export default function App() {
    return (_jsxs("div", { className: "app-container", children: [_jsx(SEO, { ...seoData.home }), _jsxs("div", { className: "container", children: [_jsx(Header, {}), _jsx(Hero, {}), _jsx(Footer, {})] })] }));
}
