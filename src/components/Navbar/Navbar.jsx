import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  
  return <nav className="navbar">
    <h1 className="navbar__heading">Punk API</h1>
    <label htmlFor="search-term"></label>
    <input className="navbar__input" type="text" name="search-term" placeholder="Search..."/>
  </nav>
}

export default Navbar;