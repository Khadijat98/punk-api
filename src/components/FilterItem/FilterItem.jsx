import React from "react";
import "./FilterItem.scss";

const FilterItem = (props) => {
  const {label, onChange} = props;

  return <div className="filter-item">
    <label>{label}</label>
    <input type="checkbox" onChange={onChange}/>
  </div>
}

export default FilterItem;