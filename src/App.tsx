import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

import './App.css';


export default function App() {
  return (
    <div className="app-container">
      <div className="container">
        <Header />
        <Hero />
        <Footer />
      </div>
</div>

  );
}
