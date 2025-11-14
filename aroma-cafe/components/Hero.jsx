import React from 'react';
import '../styles/Hero.css';
import icono from '../src/assets/icono.png';

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-overlay">
        <img src={icono} alt="Icono Cafe" className="hero-icon" />
        <h1 className="hero-lema">Hecho a mano, servido con el alma</h1>
      </div>
    </section>
  );
}

export default Hero;
