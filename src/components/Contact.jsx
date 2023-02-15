import React from "react";
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="container-fluid contact-container">
      <div className="row">
        <div className="col">
          <h2 className="title-contact"> CONTACT ME </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-2 divider-black-contact"></div>
        <img src={require('../img/starblack.png')} alt='estrella' className="star-black" />
        <div className="col-2 divider-black-contact"></div>
      </div>
      <form action="">
        <div className="row">
        <label for='' className="name">Name</label>
        <input type="text" className="forms form-name" />
      </div>
      <div className="row">
        <label for='' className="email">Email Address</label>
        <input type="email" className="forms form-email" />
      </div>
      <div className="row">
        <label for='' className="number">Phone Number</label>
        <input type="text" className="forms form-number" />
      </div>
      <div className="row">
        <label for='' className="message">Message</label>
        <input type="text" className="forms form-message" />
      </div>
      <div className="row">

      </div>
      </form>
      
    </div>
  )
}

export default Contact;