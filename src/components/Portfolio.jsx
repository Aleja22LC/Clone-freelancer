import React from "react";
import '../styles/Portfolio.css';

const Portfolio = () => {
  return (
    <div className="container-fluid second-container">
      <div className="row">
        <div className="col">
          <h2 className="second-title">PORTFOLIO</h2>
        </div>
      </div>
      <div className="row">
        <div className="col divider-black"></div>
        <img src={require('../img/starblack.png')} alt='estrella' className="star-black" />
        <div className="col divider-black"></div>
      </div>
      <div className="row">
        <div className="col">
        <img src={require('../img/cabin.png')} alt="cabaña" className="second cabin" />
        </div>
        <div className="col">
        <img src={require('../img/cake.png')} alt="pastel" className="second cake" />
        </div>
        <div className="col">
        <img src={require('../img/circus.png')} alt="circo" className="second circus" />
        </div>
      </div>
      <div className="row">
        <div className="col">
        <img src={require('../img/game.png')} alt="juego" className="second game" />
        </div>
        <div className="col">
        <img src={require('../img/safe.png')} alt="seguridad" className="second safe" />
        </div>
        <div className="col">
        <img src={require('../img/submarine.png')} alt="submarino" className="second submarine" />
        </div>
      </div>
    </div>
  )
}

export default Portfolio;