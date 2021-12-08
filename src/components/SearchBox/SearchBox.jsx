import React from "react";
import "./SearchBox.scss";

const SearchBox = (props) => {
  const {searchTerm, handleInput} = props;

  return <div>
    <label></label>
    <input className="search-box__input" type="text" value={searchTerm} onInput={handleInput} placeholder="Search..."/>
  </div>

};

export default SearchBox;