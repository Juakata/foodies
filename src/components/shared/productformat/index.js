import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ProductFormat = ({
  img, name, description, category, price,
}) => (
  <article className="product-format">
    <img src={img} alt="Food" />
    <div className="info-container">
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="flex-btw">
        <h4 className="transparent-black">{category}</h4>
        <div>${price}</div>
      </div>
    </div>
  </article>
);

PropTypes.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default ProductFormat;
