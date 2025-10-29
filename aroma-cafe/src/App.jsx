import React from 'react';
import NavbarComponent from '../components/Navbar';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import '../styles/App.css';

function App() {
  return (
    <>
      {/* Contenedor con fondo para Navbar, Hero y Menu */}
      <div className="app-container">
        <NavbarComponent />
        <Hero />
        <Menu />
      </div>

      {/* Footer independiente */}
      <Footer />
    </>
  );
}

export default App;
