import SiteNavbar from './Navbar';
 

export default function Header() {
  return (
<header className="solar-header">
  <div className="solar-header-content">
    <h1 className="solar-title">Solar Energy Flow</h1>
    <SiteNavbar />
  </div>
</header>
  );
}