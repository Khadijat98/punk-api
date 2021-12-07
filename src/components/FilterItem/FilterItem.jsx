import React from "react";
import "./FilterItem.scss";

const FilterItem = (props) => {
  const {name} = props;

  return <div>
    <label htmlFor={name}>{name}</label>
    <input type="checkbox" name={name} id="" />
  </div>
}

export default FilterItem;