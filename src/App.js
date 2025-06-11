import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import './App.css';
export default function App() {
    return (_jsx("div", { 
        className: "app-container", 
        children: _jsxs("div", { 
            className: "container", 
            children: [
                        _jsx(Header, {}), 
                        _jsx(Hero, {}), 
                        _jsx(Footer, {})
                    ] 
                }
            ) 
        }
    )
);
}
