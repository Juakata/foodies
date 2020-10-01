import React from 'react';
import PropTypes from 'prop-types';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

const Map = ({ lat, lng }) => (
  <GoogleMap defaultZoom={10} defaultCenter={{ lat: parseFloat(lat), lng: parseFloat(lng) }}/>
);

Map.propTypes = {
  lat: PropTypes.string.isRequired,
  lng: PropTypes.string.isRequired,
}

export default withScriptjs(
  withGoogleMap(Map),
);
