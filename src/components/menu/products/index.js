import React from 'react';
import elaniin from '../../../api/elaniin';
import ProductFormat from '../../shared/productformat';
import './style.scss';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'all',
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
    const { menu } = this.state;

    return (
      menu.map(product => (
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

  render() {
    return (
      <section className="products">
        <div className="grid-menu">
          {this.renderMenu()}
        </div>
      </section>
    );
  }
}

export default Products;
