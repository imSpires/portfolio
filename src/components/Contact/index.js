import React from 'react';
// import { Form, Formik} from 'formik';
// import * as Yup from 'yup';
import ContactForm from '../ContactForm';
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';


function Contact() {

  return (
    <section className="contact" id="contact">
      <Fade bottom cascasde>
      <div className="contact-left">
          <Pulse>
          <h2>Get in touch with <span className="span-color">me!</span></h2>
          </Pulse>
          <p>Feel free to connect on social media.</p>
          <div>
              <a href="https://www.linkedin.com/in/ryan-dungan-5352a9211/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in fa-7x"></i></a>
          <a href="https://github.com/imSpires" target="_blank" rel="noopener noreferrer"><i class="fab fa-github fa-7x"></i></a>
          </div>
      </div>
      </Fade>

      <Fade right>
      <div className="contact-right">
          <div className="contact-box">
            <ContactForm />
          </div>
      </div>
      </Fade>
    </section>
    
  );
}

export default Contact;