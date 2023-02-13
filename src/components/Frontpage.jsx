import React from "react";
import '../styles/Frontpage.css';

const Front = () => {
  return (
    <div className="container-fluid front-container">
      <div className="row">
        <div className="col">
          <img src={require('../img/profile.png')} alt="perfil" className="img-profile" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1 className="title-one">START BOOTSTRAP</h1>
        </div>
      </div>
      <div className="row">
        <div className="col divider"></div>
        <img src={require ('../img/star.png')} alt='estrella' className="star"/>
        <div className="col divider"></div>
      </div>
      <div className="row">
        <div className="col">
          <p>Web Developer - Graphic Artist - User Experience Designer</p>
        </div>
      </div>
    </div>
  )
}

export default Front;