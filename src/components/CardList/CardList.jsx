import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./CardList.scss";

const CardList = () => {
  const [beerArray, setBeerArray] = useState ([]);

  useEffect(() => {
    const URL = `https://api.punkapi.com/v2/beers`;
    fetch(URL)
    .then(response => {
      return response.json();
    })
    .then(beerObject => {
      console.log(beerObject)
      setBeerArray(beerObject);
    })
  }, [])

  const cardListJSX = beerArray.map((beer) => {
    return <Card key={beer.id} name={beer.name} imageURL={beer.image_url} brewDate={beer.first_brewed} alcoholStrength={beer.abv}/>
  })

  return <div className="beer-cardlist">
    {cardListJSX}
  </div>

}

export default CardList;