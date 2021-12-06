import React from "react";
import "./Card.scss";

const Card = (props) => {
  const {name, imageURL, brewDate, alcoholStrength} = props;

  return <div className="beer-card">
    <img src={imageURL} alt={name} className="beer-card__image"/>
    <h3 className="beer-card__name">{name}</h3>
    <p className="beer-card__date">Brew Date: {brewDate}</p>
    <p className="beer-card__strength">Alcohol by Volume: {alcoholStrength}</p>
  </div>

}

export default Card;