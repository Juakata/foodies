import React from 'react';
import PropTypes from 'prop-types';
import PhoneImg from '../../../assets/main/phone.png';
import VectorRight from '../../../assets/backgrounds/vector-right.svg';
import VectorLeft from '../../../assets/backgrounds/vector-left.svg';
import './style.scss';

const BenefitsSection = ({ benefits }) => {
  const renderBenefits = () => (
    benefits.map(benefit => (
      <article key={benefit.id}>
        <span>{`0${benefit.id}`}</span>
        <h3>{benefit.title}</h3>
        <p>
          {benefit.info}
        </p>
      </article>
    ))
  )

  return (
    <section className="benefits-section">
      <img src={PhoneImg} alt="Phone" />
      <div className="sub-flex-container">
        <h2>
          Obten más beneficios
          <br />
          <span className="yellow-block">Descarga nuestra App</span>
        </h2>
        <div className="flex-wrap">
          <img className="vector-right" src={VectorRight} alt="Vector Right" />
          <img className="vector-left" src={VectorLeft} alt="Vector Left" />
          {renderBenefits()}
        </div>
      </div>
    </section>
  )
};

BenefitsSection.propTypes = {
  benefits: PropTypes.array.isRequired,
}

export default BenefitsSection;
