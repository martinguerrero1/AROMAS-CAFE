import React from 'react';
import { Container } from 'react-bootstrap';
import { FaInstagram } from 'react-icons/fa'; // vamos a usar react-icons
import '../styles/Navbar.css'; // archivo de estilos específico

const NavbarComponent = () => {
  return (
    <div className="navbar-container">
      <Container className="d-flex justify-content-between align-items-center">
        <div className="navbar-title">Aroma's Cafe</div>
        <a className='ig-icon' href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={40}/>
        </a>
      </Container>
    </div>
  );
}

export default NavbarComponent;