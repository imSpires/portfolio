import React, { useState }  from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

// import * as Yup from 'yup';

function ContactForm() {

    // Couldn't get this working

    // const validate = Yup.object({
    //   name: Yup.string().required('Required'),
    //   email: Yup.string().email('Email is invalid').required('Required'),
    //   message: Yup.string().required('Required')
    // })

    
    const sendEmail = (e) => {

      e.preventDefault();

      emailjs.sendForm('service_a576nc3', 'template_z1jwth6', e.target, 'user_culXofI6PLj14NhpM04V2')
      .then((result) => {
        console.log(result.text)
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully"
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        })
      });
      e.target.reset();
    }

    return (
            <div>
            <h2>Contact me <span className="span-color">directly</span></h2>
            <p>I will get back to you as soon as possible!</p>
            <form action="" onSubmit={sendEmail}>
              <input 
                type="text" 
                label="name" 
                name="name"
                className="field" 
                placeholder="Your Name" required />
                <input 
                type="email" 
                label="email" 
                name="email" 
                className="field" 
                placeholder="Your Email" required />
                <textarea 
                name="message" 
                label="message" 
                className="field" 
                placeholder="Message" required />
                <button 
                className="contactbtn btn" 
                type="submit">Send!</button>
            </form>
          </div>
    )
  };
  
export default ContactForm;


