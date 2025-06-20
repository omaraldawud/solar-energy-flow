import './App.css';
import seoData from "./data/seoData";
import SEO from "./components/seo-components/SEO";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderTop from "./components/HeaderTop";
import Hero from "./components/Hero";
import HeroHome from './components/HeroHome';


export default function App() {
  return (
    <div className="app-container">
      <SEO {...seoData.home} />
      <div className="container-fluid p-0">
        <HeaderTop />
         <HeroHome />
        <Footer />
      </div>
    </div>

  );
}
