import React from 'react';
import elaniin from '../../../api/elaniin';
import './style.scss';

const nameRegex = RegExp(
  /^[A-zÁ-ź .ñ']+$/,
);

const emailRegex = RegExp(
  /^[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-z]{2,}$/,
);

class ContactForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: '',
        error: '',
        response: null,
      }
  }

  handleSubmit = event => {
    event.preventDefault();
    const { name, email, message } = this.state;
    if (nameRegex.test(name) || emailRegex.test(email) || message.length > 0) {
      elaniin.post('/api/contact', { name, email, message })
        .then(response => this.setState({
          response: response.data.message,
          name: '',
          email: '',
          message: '',
        }))
        .catch(error => this.setState({ error }));
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { name, email, message, response } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="contact-form">
        <div className="left-container">
          <label className={nameRegex.test(name) ? 'correct' : 'incorrect'} htmlFor="name">
            Nombre y Apellido
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label className={emailRegex.test(email) ? 'correct' : 'invalid'} htmlFor="email">
            Correo electrónico
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <label className={message.length > 0 ? 'correct' : 'invalid'} htmlFor="message">
          Mensaje
          <textarea name="message" value={message} onChange={this.handleChange} />
        </label>
        {response && <span>{response}</span>}
        <div className="btn-container">
          <button className="yellow-btn" type="submit">Enviar comentarios</button>
        </div>
      </form>
    )
  }
}

export default ContactForm;
