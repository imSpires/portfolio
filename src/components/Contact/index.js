import React from 'react';

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-left">
          <h2>Get in touch with <span className="span-color">me!</span></h2>
          <p>Have any questions? Send me a message!</p>
          <div>
              <a href="https://www.linkedin.com/in/ryan-dungan-5352a9211/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in fa-7x"></i></a>
          <a href="https://github.com/imSpires" target="_blank" rel="noopener noreferrer"><i class="fab fa-github fa-7x"></i></a>
          </div>
      </div>
        <div className="contact-right">
        <div className="contact-box">
            <div className="contact-box-right">
                <h2>Send me a message!</h2>
                <p>I will get back to you as soon as possible!</p>
                <input type="text" className="field" placeholder="Your Name" />
                <input type="email" className="field" placeholder="Your E-mail" />
                <textarea className="field" placeholder="Message" />
                <button className="contactbtn btn">Send!</button>
            </div>

        </div>
        </div>

    </section>
    
  );
}

export default Contact;