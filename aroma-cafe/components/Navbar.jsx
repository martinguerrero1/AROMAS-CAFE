import React from 'react';
import { Container } from 'react-bootstrap';
import IGLogo from '../src/assets/instagramlogo.svg'
import '../styles/Navbar.css'; // archivo de estilos específico

const NavbarComponent = () => {
  return (
    <div className="navbar-container">
      <Container className="d-flex justify-content-between align-items-center">
        <div className="navbar-title">Aroma's Cafe</div>
        <a className='ig-icon' href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src={IGLogo} alt="Instagram" className="ig-svg" width={40}/>
        </a>
      </Container>
    </div>
  );
}

export default NavbarComponent;