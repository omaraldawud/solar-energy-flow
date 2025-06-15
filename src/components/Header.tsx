import SiteNavbar from './Navbar';
import '../css/Header.css';
import PhoneCTA from './PhoneCTA';


export default function Header() {
  return (
<header className="solar-header">
  <div className="solar-header-content">
    <div className="logo-container">
      <img 
        src="/images/solar-energy-flow-tr.png" 
        alt="Solar Energy Flow Logo" 
        style={{ maxWidth: '150px', height: 'auto' }} 
      />
          <div>
      <h1 className="solar-title">Solar Energy Flow</h1>
    </div>
    </div>

    <div>
        <SiteNavbar />
        <PhoneCTA />
    </div>

  </div>
</header>
  );
}