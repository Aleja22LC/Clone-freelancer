import React from "react";
import '../styles/Header.css';


const Header = () => {
  return (
    <div className="container-fluid nav-container">
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6">
          <h1>START BOOTSTRAP</h1>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 navbar">
          <div className="col-xs-2 col-sm-2 col-md-2"><a href="#portfolio">PORTFOLIO</a></div>
          <div className="col-xs-2 col-sm-2 col-md-2"><a href="#about">ABOUT</a></div>
          <div className="col-xs-2 col-sm-2 col-md-2"><a href="#contact">CONTACT</a></div>
        </div>
      </div>
    </div>
  )
}

export default Header;