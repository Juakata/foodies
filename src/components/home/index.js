import React from 'react';
import Welcome from '../shared/welcome';
import About from './about';
import Locations from './locations';
import Hamburger from '../../assets/main/hamburger.png';
import './style.scss';

const Home = () => (
  <>
    <Welcome
      text1="Un nuevo"
      text2="sabor esta en"
      text3="la ciudad"
      img={Hamburger}
      backgroundClass="hamburger-1"
      findUs
    />
    <About />
    <Locations />
  </>
);

export default Home;
