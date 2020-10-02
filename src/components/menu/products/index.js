import React from 'react';
import elaniin from '../../../api/elaniin';
import SearchIcon from '../../../assets/icons/search.svg';
import ProductFormat from '../../shared/productformat';
import './style.scss';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'Todas',
      filter: '',
      menu: [],
    }
  }

  componentDidMount() {
    elaniin.get('/api/menu')
      .then(response => this.setState({ menu: response.data.data }))
      .catch(error => this.setState({ error }));
  }

  renderMenu = () => {
    const { menu, filter, category } = this.state;
    const reg = new RegExp(filter, 'i');
    const menuFilter = menu.filter(product => (category === 'Todas' || product.category === category) && reg.exec(product.name));

    return (
      menuFilter.map(product => (
        <ProductFormat
          key={product.id}
          img={product.image}
          name={product.name}
          description={product.description}
          category={product.category}
          price={product.price}
        />
      ))
    );
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { filter, category } = this.state;

    return (
      <section className="products">
        <div className="flex-btw-cont">
          <form>
            <img src={SearchIcon} alt="Search icon" />
            <input
              type="text"
              name="filter"
              value={filter}
              placeholder="Busca tu platillo favorito"
              onChange={this.handleChange}
            />
          </form>
          <ul>
            <li
              onClick={() => this.setState({ category: 'Todas' })}
              className={category === 'Todas' ? 'active' : ''}
            >
              Todas
            </li>
            <li
              onClick={() => this.setState({ category: 'Las tradiciones' })}
              className={category === 'Las tradiciones' ? 'active' : ''}
            >
              Las tradiciones
            </li>
            <li
              onClick={() => this.setState({ category: 'Recomendaciones' })}
              className={category === 'Recomendaciones' ? 'active' : ''}
            >
              Recomendaciones
            </li>
            <li
              onClick={() => this.setState({ category: 'Para compartir' })}
              className={category === 'Para compartir' ? 'active' : ''}
            >
              Para compartir
            </li>
          </ul>
        </div>
        <div className="grid-menu">
          {this.renderMenu()}
        </div>
      </section>
    );
  }
}

export default Products;
