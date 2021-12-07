import React from "react";
import Card from "../Card/Card";
import "./CardList.scss";

const CardList = (props) => {
const {beerArray} = props;

  const beerCardList = beerArray.map((beer) => {
    return <Card key={beer.id} name={beer.name} imageURL={beer.image_url} brewDate={beer.first_brewed} alcoholStrength={beer.abv}/>
  })

  return <div className="beer-cardlist">
    {beerCardList}
  </div>

}

export default CardList;