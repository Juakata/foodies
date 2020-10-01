import React from 'react';
import Welcome from '../shared/welcome';
import About from './about';
import Locations from './locations';
import BestPlace from './bestplace';
import Hamburger from '../../assets/main/hamburger.png';

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
    <BestPlace />
  </>
);

export default Home;
