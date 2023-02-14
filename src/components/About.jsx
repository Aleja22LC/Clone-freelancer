import React from "react";
import '../styles/About.css';

const About = () => {
  return (
    <div className="container-fluid about-container">
      <div className="row">
        <div className="col">
          <h2 className="third-title">ABOUT</h2>
        </div>
      </div>
      <div className="row">
        <div className="col divider"></div>
        <img src={require('../img/star.png')} alt='estrella' className="star" />
        <div className="col divider"></div>
      </div>
      <div className="row">
        <div className="col">
        <h5 className="p-one">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS and JavaScript as well as optional LESS stylesheets for easy customization.</h5>
        </div>
        <div className="col">
        <h5 className="p-two">Whether you're student looking to showcase your work, a professional looking to attract clients, or a graphic artist looking to share your projects, this template is the perfect starting point!</h5>
        </div>
      </div>
      <div className="row">
        <div className="col button-container">
        <button className="button-about"><img src={require('../img/download.png')} alt='descarga' className="download-img" />  Dowloand Theme</button>
        </div>
      </div>
    </div>
  )
}

export default About;