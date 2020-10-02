import React from 'react';
import Welcome from '../shared/welcome';
import About from './about';
import Locations from './locations';
import BestPlace from './bestplace';
import FormSection from './formsection';
import BenefitsSection from './benefits';
import Hamburger from '../../assets/main/hamburger.png';

const Home = () => {
  const benefits = [
    {
      id: 1,
      title: 'Solicita rápido',
      info: 'Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.',
    },
    {
      id: 2,
      title: 'Fácil de Usar',
      info: 'Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.',
    },
    {
      id: 3,
      title: 'Promociones especiales',
      info: 'Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.',
    },
  ]

  return (
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
      <FormSection />
      <BenefitsSection benefits={benefits} />
    </>
  );
}

export default Home;
