import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

import './App.css';
import { Helmet } from "react-helmet-async";


export default function App() {
  return (
    <div className="app-container">
      <Helmet>
              <title>Pacific Northwest Irrigation | Home of Irrigation</title>
              <meta name="description" content="Professional irrigation services in the Pacific Northwest. Reliable and eco-friendly solutions for residential and commercial properties." />
              <meta property="og:title" content="Pacific Northwest Irrigation" />
              <meta property="og:description" content="Expert irrigation services in the Pacific Northwest region." />
              <meta property="og:type" content="website" />
      </Helmet>
      <div className="container">
        <Header />
        <Hero />
        <Footer />
      </div>
</div>

  );
}
