import React from 'react';
import GoogleImg from '../../../assets/main/google.png';
import AppleImg from '../../../assets/main/apple.png';
import './style.scss';

const Footer = () => (
  <footer className="footer">
    <div className="flex-btn">
      <h2 className="transparent-black">Foodies</h2>
      <div>
        <img src={GoogleImg} alt="Google" />
        <img src={AppleImg} alt="Apple" />
      </div>
    </div>
    <ul>
      <li>Conoce nuestras sucursales</li>
      <li>Acerca de</li>
      <li>Conoce nuestras sucursales</li>
      <li>¿Qué hablan de nosotros?</li>
      <li>Conoce nuestras sucursales</li>
      <li>Contáctanos</li>
    </ul>
  </footer>
);

export default Footer;
