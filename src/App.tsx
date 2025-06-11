import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

import './App.css';
import { Helmet } from "react-helmet-async";
import SEO from "./components/seo-components/SEO";
import seoData from "./data/seoData";


export default function App() {
  return (
    <div className="app-container">
      <SEO {...seoData.home} />
      <div className="container">
        <Header />
        <Hero />
        <Footer />
      </div>
</div>

  );
}
