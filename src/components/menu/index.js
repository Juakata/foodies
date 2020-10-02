import React from 'react';
import Welcome from '../shared/welcome';
import Hamburger2 from '../../assets/main/hamburger2.png';

const Menu = () => (
  <>
    <Welcome
      text1="Cada sabor"
      text2="es una nueva"
      text3="experiencia"
      img={Hamburger2}
      backgroundClass="hamburger-2"
      findUs={false}
    />
  </>
);


export default Menu;
