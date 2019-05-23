import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <nav className="navbar navbar-light bg-light flex-nowrap">
      <a className="navbar-brand" href="#">
        <i className="fab fa-lg fa-instagram" />
        <span className="brand"> Instagram </span>{" "}
      </a>
      <input placeholder="Search" className="col-sm-4 col-form-label " />
      <div className="right-sect-nav d-flex">
        <i className="far fa-lg fa-compass" />
        <i className="far fa-lg fa-heart" />
        <i className="fas fa-lg fa-user-alt" />
      </div>{" "}
    </nav>
  );
};

export default SearchBar;
