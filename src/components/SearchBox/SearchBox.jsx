import React from "react";

const SearchBox = (props) => {
  const {name, searchTerm, handleInput} = props;

  return <div>
    <label htmlFor={name}></label>
    <input className="search-box__input" type="text" name={name} value={searchTerm} onInput={handleInput} placeholder="Search..."/>
  </div>

};

export default SearchBox;