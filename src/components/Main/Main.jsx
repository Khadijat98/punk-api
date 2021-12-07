import React from "react";
import CardList from "../CardList/CardList";
import "./Main.scss";


const Main = (props) => {
  const {beerArray} = props;

  return <div>
    <CardList beerArray={beerArray}/>
  </div>
}

export default Main;