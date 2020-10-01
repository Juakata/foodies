import React from 'react';
import elaniin from '../../../api/elaniin';
import SearchIcon from '../../../assets/icons/search.svg';
import FoodIcon from '../../../assets/icons/food.svg';
import CarIcon from '../../../assets/icons/car.svg';
import Map from './Map';
import './style.scss';

class Locations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      locations: [],
      type: 'takeaway',
      location: { lat: '13.710566', lng: '-89.231635' },
      sucursal: 'Sucursal 75 Avenida',
      filter: '',
    }
  }

  componentDidMount() {
    const { type } = this.state;
    elaniin.get('/api/locations', { params: { type } })
      .then(response => {
        const { latitude, longitude } = response.data.data[0];
        this.setState({
          locations: response.data.data,
          location: { lat: latitude, lng: longitude },
        });
      })
      .catch(error => this.setState({ error }))
  }

  handleSucursales = location => {
    this.setState({
      sucursal: location.name,
      location: { lat: location.latitude, lng: location.longitude },
    })
  }

  renderLocations = () => {
    const { locations, sucursal, filter } = this.state;
    const reg = new RegExp(filter, 'i');
    const locationsFilter = locations.filter(location => reg.exec(location.name) || reg.exec(location.address));
    return (
      locationsFilter.map(location => (
        <li
          className={ sucursal === location.name ? 'active' : 'inactive'}
          key={location.id}
          onClick={() => this.handleSucursales(location)}
        >
          <h4>{location.name}</h4>
          <p>
            {`Abierto de ${location.opening_time}, ${location.closing_time}`}
            <br />
            {location.address}
          </p>
        </li>
      ))
    );
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { location, filter } = this.state;
    return (
      <section className="locations">
        <div className="section-1">
          <h3>Estamos para ti</h3>
          <div>
            <button className="food-btn" type="button">
              <img src={FoodIcon} alt="Food icon" /> Para llevar
            </button>
            <button type="button">
              <img src={CarIcon} alt="Car icon" /> Domicilio
            </button>
          </div>
          <form>
            <img src={SearchIcon} alt="Search icon" />
            <input
              type="text"
              name="filter"
              value={filter}
              placeholder="Buscar nombre o dirección"
              onChange={this.handleChange}
            />
          </form>
          <ul>
            {this.renderLocations()}
          </ul>
        </div>
        <div className="section-2">
          <Map
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${process.env.REACT_APP_GOOGLE_KEY}`}
            containerElement=<div style={{ height: '100%' }} />
            mapElement=<div style={{ minHeight: '500px', height: '100%' }}></div>
            loadingElement=<p>Cargando...</p>
            lat={location.lat}
            lng={location.lng}
          />
        </div>
      </section>
    );
  }
}

export default Locations;
