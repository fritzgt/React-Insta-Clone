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
      <div className="right-sect-nav">
        <i class="far fa-lg fa-compass" />
        <i class="far fa-lg fa-heart" />
        <i class="fas fa-lg fa-user-alt" />
      </div>
    </nav>
  );
};

export default SearchBar;
