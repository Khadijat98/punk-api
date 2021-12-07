import React from "react";
import FilterItem from "../FilterItem/FilterItem";
import "./FiltersList.scss";

const FiltersList = () => {
  
  return (
    <>
      <div>
        <FilterItem name={"High ABV (> 6.0%)"}/>
      </div>
      <div>
        <FilterItem name={"Classic Range"}/>
      </div>
      <div>
        <FilterItem name={"Acidic (ph < 4)"}/>
      </div>
    </>
  )
}

export default FiltersList;