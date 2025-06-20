import React from 'react';
import { FaPhone } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="bg-dark text-white" style={{ borderBottom: '1px solid #333', width: '100%' }}>
  <div className="container-fluid px-3">
    <div className="row align-items-center">
      {/* Left: Logo */}
      <div className="col-12 col-md-4 d-flex align-items-center">
        <img
          src="https://solarenergyflow.net/images/solar-energy-flow-tr.png"
          alt="Solar Energy Flow Logo"
          className="img-fluid me-2"
          style={{ maxWidth: '40px' }}
        />
        <span className="fs-4 fw-bold" style={{ color: '#F7CA4D' }}>
          Solar Energy Flow
        </span>
      </div>

      {/* Center: Phone (hidden on small) */}
      <div className="col-12 col-md-4 d-none d-md-flex justify-content-center align-items-center">
        <FaPhone size={20} className="me-2" color="#F7CA4D" />
        <a href="tel:+16308008077" className="text-white text-decoration-none fs-5">
          +1 630 800 8077
        </a>
      </div>

      {/* Right: Navigation */}
      <nav className="col-12 col-md-4 d-flex justify-content-end align-items-center">
        <ul className="nav d-none d-md-flex">
          <li className="nav-item">
            <a className="nav-link text-white px-3" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white px-3" href="#services">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white px-3" href="#contact">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white px-3" href="#about">
              About
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</header>

  );
};

export default Header;
