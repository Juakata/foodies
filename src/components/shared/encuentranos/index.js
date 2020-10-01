import React from 'react';
import { Link } from 'react-router-dom';
import RightArrow from '../../../assets/icons/arrow-right.svg';
import './style.scss';

const Encuentranos = () => (
  <Link to="/encuentranos" className="encuentranos">
    Encuentranos <img src={RightArrow} alt="Right arrow" />
  </Link>
);

export default Encuentranos;
