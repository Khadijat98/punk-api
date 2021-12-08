import React from "react";
import FilterItem from "../FilterItem/FilterItem";
import "./FiltersList.scss";

const FiltersList = (props) => {
  const {checkOne, checkTwo, checkThree} = props;
 
  return (
    
      <div className="filters-list" >
        <FilterItem label={"High ABV (> 6.0%)"} onChange={checkOne}/>
        <FilterItem label={"Classic Range"} onChange={checkTwo}/>
        <FilterItem label={"Acidic (ph < 4)"} onChange={checkThree}/>
      </div>
    
  )
}

export default FiltersList;