import React from 'react';
import '../styles/Footer.css';
import { FaInstagram } from 'react-icons/fa'; // vamos a usar react-icons

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-main">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} color="white" />
        </a>
        <p className="footer-contact">2364713329</p>
        <p className="footer-address">Calle Falsa 123 - Junín, Buenos Aires</p>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Aroma's Cafe. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
