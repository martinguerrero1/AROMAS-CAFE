import React from 'react';
import '../styles/Footer.css';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-main">
        <a 
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <FaInstagram size={32} />
        </a>

        <p className="footer-contact">2364713329</p>
        <p className="footer-address">Calle Falsa 123 - Junín, Buenos Aires</p>
      </div>

      <hr className="footer-separator" />

      <div className="footer-bottom">
        <p>© 2025 Aroma's Cafe. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
