import React from 'react';
import LeftRed from '../../../assets/backgrounds/left-red.svg';
import RightRed from '../../../assets/backgrounds/right-red.svg';
import RightKetchup from '../../../assets/backgrounds/right-ketchup.svg';
import './style.scss';

const BestPlace = () => (
  <section className="best-place">
    <h2>“El mejor lugar para degustar en familia y amigos!”</h2>
    <p className="transparent-black">
      Es el mejor lugar al que he venido con mi familia, la comida es rica,
      sirven rápido y te atienden de la mejor manera.
    </p>
    <img className="img-left" src={LeftRed} alt="Red shape" />
    <img className="img-right-ket" src={RightKetchup} alt="Ketchup" />
    <img className="img-right" src={RightRed} alt="Red shape" />
  </section>
);

export default BestPlace;
