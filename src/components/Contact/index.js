import React from 'react';
import { Form, Formik} from 'formik';
import * as Yup from 'yup';
import ContactForm from '../ContactForm';


function Contact() {

  return (
    <section className="contact" id="contact">

      <div className="contact-left">
          <h2>Get in touch with <span className="span-color">me!</span></h2>
          <p>Feel free to connect on social media.</p>
          <div>
              <a href="https://www.linkedin.com/in/ryan-dungan-5352a9211/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in fa-7x"></i></a>
          <a href="https://github.com/imSpires" target="_blank" rel="noopener noreferrer"><i class="fab fa-github fa-7x"></i></a>
          </div>
      </div>
        <div className="contact-right">
            <div className="contact-box">
              <ContactForm />
            </div>
        </div>

    </section>
    
  );
}

export default Contact;