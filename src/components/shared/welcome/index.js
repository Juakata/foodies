import React from 'react';
import PropTypes from 'prop-types';
import Encuentranos from '../encuentranos';
import './style.scss';

const Welcome = ({ text1, text2, text3, img, backgroundClass, findUs }) => (
  <section className={`welcome ${backgroundClass}`}>
    <div className="flex-1">
      <h1>
        {text1}
        <br />
        {text2}
        <br />
        <span className="yellow-block">{text3}</span>
      </h1>
      {findUs && (
        <>
          <p className="transparent-black">
            Estamos a punto de descubrir un mundo lleno de sabores y de emociones inigualables.
          </p>
          <Encuentranos />
        </>
      )}
    </div>
    <div className="flex-2">
      <img src={img} alt="hamburger" />
    </div>
  </section>
);

Welcome.propTypes = {
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  text3: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  backgroundClass: PropTypes.string.isRequired,
  findUs: PropTypes.bool,
}

Welcome.defaultProps = {
  findUs: true,
}

export default Welcome;
