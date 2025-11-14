import React from "react";
import Whatsapp from '../src/assets/whatsapp.svg';
import "../styles/BotonWpp.css";

const BotonWpp = () => {
  return (
    <a href="https://wa.me/543264713329" target="_blank" rel="noopener noreferrer" className="wpp-button">
      <img src={Whatsapp} alt="WhatsApp"/>
    </a>
  );
};

export default BotonWpp;
