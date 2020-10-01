import React from 'react';
import Encuentranos from '../../shared/encuentranos';
import './style.scss';

const About = () => (
  <section className="about">
    <div className="block-img">
      <h2>
        LA COMIDA ES
        <br />
        <span className="yellow">NUESTRO ARTE</span>
      </h2>
      <div className="shadow-block" />
    </div>
    <div className="second-block-img">
      <h3>¿Quién es Foodies?</h3>
      <p className="transparent-black">
        Elit irure ad nulla id elit laborum nostrud mollit irure. Velit reprehenderit sunt
        nulla enim aliquip duis tempor est culpa fugiat consequat culpa consectetur Lorem.
        Reprehenderit dolore culpa irure eiusmod minim occaecat et id minim ullamco.
      </p>
      <Encuentranos />
    </div>
  </section>
);

export default About;
