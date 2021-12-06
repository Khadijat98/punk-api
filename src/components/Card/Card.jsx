import React from "react";
import "./Card.scss";

const Card = (props) => {
  const {name, imageURL, brewDate, alcoholStrength} = props;

  return <div>
    <img src={imageURL} alt={name} />
    <h3>{name}</h3>
    <p>{brewDate}</p>
    <p>{alcoholStrength}</p>
  </div>

}

export default Card;