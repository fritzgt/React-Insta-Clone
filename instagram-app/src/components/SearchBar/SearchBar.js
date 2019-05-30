import React from "react";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <nav className="navbar navbar-light bg-light flex-nowrap">
      {/* branding container */}
      <div className="navbar-brand" href="#">
        <i className="fab fa-lg fa-instagram" />
        <span className="brand"> Instagram </span>
      </div>
      {/* input / search fild to filter results */}
      <form onSubmit={props.submitSearch}>
        <input
          placeholder="Search by User Name"
          className="form-control"
          type="text"
          value={props.searchTerm}
          onChange={props.handleSearch}
          name="searchTerm"
          required
        />
      </form>
      {/* likes and loggin icons */}
      <div className="right-sect-nav d-flex">
        <span className="greet-user">
          Welcome {localStorage.getItem("user")}!
        </span>
        <i className="far fa-lg fa-compass" />
        <i className="far fa-lg fa-heart" />
        <i className="fas fa-lg fa-sign-out-alt" onClick={props.login} />
      </div>{" "}
    </nav>
  );
};

export default SearchBar;
