import React from "react";
import styled from "styled-components";

// JS styles
const NavBar = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 10px;
  font-size: 1.3rem;
  background-color: whitesmoke;
`;

const Brand = styled.span`
  margin-left: 10px;
  padding-left: 10px;
  border-left: 1px solid gray;
`;

const NavItem = styled.div`
  i {
    padding: 6px 15px;
    font-size: 1.3rem;
  }
`;

// End of JS styles

const SearchBar = props => {
  return (
    <NavBar>
      {/* branding container */}
      <div>
        <i className="fab fa-lg fa-instagram" />
        <Brand> Instagram </Brand>
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
      <NavItem>
        <span className="greet-user">
          Welcome {localStorage.getItem("user")}!
        </span>
        <i className="far fa-lg fa-compass" />
        <i className="far fa-lg fa-heart" />
        <i className="fas fa-lg fa-sign-out-alt" onClick={props.login} />
      </NavItem>
    </NavBar>
  );
};

export default SearchBar;
