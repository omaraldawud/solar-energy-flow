import React from 'react';
import { FaPhone } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="bg-dark bg-opacity-50 text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            src="images/pacific-northwest-irrigation-logo.png"
            alt="Pacific Northwest Irrigation Logo"
            className="img-fluid me-3"
            style={{ maxWidth: '200px' }}
          />
          <h1 className="h5 m-0">Pacific Northwest Irrigation</h1>
        </div>
        <div>
          <FaPhone size={28} className="me-3" color='#F7CA4D'/>
          <a  href="tel:+13344222211" className="fs-4 fw-bold" 
              style={{ color: '#F7CA4D', textDecoration: 'none' }}>+1 334 422 2211
          </a>

        </div>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="#hero">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
