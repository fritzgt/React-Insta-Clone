import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <i className="fab fa-lg fa-instagram" />
        <span className="brand">Instagram</span>
      </a>
      <input placeholder="Search" />
    </nav>
  );
};

export default SearchBar;
