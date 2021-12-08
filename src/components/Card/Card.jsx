import React from "react";
import "./Card.scss";

const Card = (props) => {
  const {name, imageURL, brewDate, alcoholStrength} = props;

  return <div className="beer-card">
    <img src={imageURL} alt={name} className="beer-card__image"/>
    <br />
    
      {/* <div className="beer-card__header">
      </div> */}
      <div className="beer-card__text">
        <h3 className="beer-card__text--name">{name}</h3>
        <p className="beer-card__text--date">Brew Date: {brewDate}</p>
        <p className="beer-card__text--strength">ABV: {alcoholStrength}</p>
      </div>
  </div>

}

export default Card;