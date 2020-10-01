import React from 'react';
import ContactForm from '../../shared/contactform';
import './style.scss';

const FormSection = () => (
  <section className="form-section">
    <h2>Cuentanos tu experiencia</h2>
    <p>
      Don't miss out on our great offers & Receive deals
      from all our top restaurants via e-mail.
    </p>
    <ContactForm />
  </section>
);

export default FormSection;
