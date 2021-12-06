import React from "react";
import Card from "../Card/Card";
import beers from "../../data/beers";
import "./CardList.scss";

const CardList = () => {
  const cardListJSX = beers.map((beer) => {
    return <Card key={beer.id} name={beer.name} imageURL={beer.image_url} brewDate={beer.first_brewed} alcoholStrength={beer.abv}/>
  })

  return <div>
    {cardListJSX}
  </div>

}

export default CardList;