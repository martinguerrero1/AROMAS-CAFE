import React from 'react';
import '../styles/Footer.css';
import IGLogo from '../src/assets/instagramlogo.svg'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-main">
              <a className='ig-icon2' href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <img src={IGLogo} alt="Instagram" className="ig-svg" width={35}/>
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
