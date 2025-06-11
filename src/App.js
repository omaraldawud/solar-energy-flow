import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import './App.css';
import { Helmet } from "react-helmet-async";
export default function App() {
    return (_jsxs("div", { className: "app-container", children: [_jsxs(Helmet, { children: [_jsx("title", { children: "Pacific Northwest Irrigation | Home of Irrigation" }), _jsx("meta", { name: "description", content: "Professional irrigation services in the Pacific Northwest. Reliable and eco-friendly solutions for residential and commercial properties." }), _jsx("meta", { property: "og:title", content: "Pacific Northwest Irrigation" }), _jsx("meta", { property: "og:description", content: "Expert irrigation services in the Pacific Northwest region." }), _jsx("meta", { property: "og:type", content: "website" })] }), _jsxs("div", { className: "container", children: [_jsx(Header, {}), _jsx(Hero, {}), _jsx(Footer, {})] })] }));
}
