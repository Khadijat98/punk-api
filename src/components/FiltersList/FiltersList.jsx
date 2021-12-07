import React from "react";
import FilterItem from "../FilterItem/FilterItem";
import "./FiltersList.scss";

const FiltersList = () => {
  
  return (
    
      <div>
        <FilterItem name={"High ABV (> 6.0%)"}/>
        <FilterItem name={"Classic Range"}/>
        <FilterItem name={"Acidic (ph < 4)"}/>
      </div>
    
  )
}

export default FiltersList;