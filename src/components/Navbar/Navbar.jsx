import React from "react";
import SearchBox from "../SearchBox/SearchBox";
import FiltersList from "../FiltersList/FiltersList";
import "./Navbar.scss";

const Navbar = (props) => {
  const {searchTerm, handleInput} = props
  
  return <div>
          <nav className="navbar">
            <h1 className="navbar__heading">Punk API</h1>
            <SearchBox name={"beer cards"} searchTerm={searchTerm} handleInput={handleInput}/>
            <div className="navbar__filter-list">
              <FiltersList />
            </div>
          </nav>
        </div>
       
}

export default Navbar;