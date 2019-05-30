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

  @media only screen and (max-width: 670px) {
    form {
      width: 50%;
    }

    div:last-child {
      display: none;
    }
    i {
      display: block;
    }
  }
`;

const NavItem = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

const Brand = styled.span`
  margin-left: 10px;
  padding-left: 10px;
  border-left: 1px solid gray;
`;

const Icons = styled.i`
  padding: 6px 15px;
  font-size: 1.3rem;
`;

const Form = styled.form`
  width: 30%;
`;

const MobileIcon = styled.i`
  display: none;
  padding: 6px 15px;
  font-size: 1.5rem;
`;
// End of JS styles

const SearchBar = props => {
  return (
    <NavBar>
      {/* branding container */}
      <NavItem>
        <i className="fab fa-lg fa-instagram" />
        <Brand> Instagram </Brand>
      </NavItem>
      {/* input / search fild to filter results */}
      <Form onSubmit={props.submitSearch}>
        <input
          placeholder="Search by User Name"
          className="form-control"
          type="text"
          value={props.searchTerm}
          onChange={props.handleSearch}
          name="searchTerm"
          required
        />
      </Form>
      {/* likes and loggin icons */}
      <MobileIcon className="fas fa-lg fa-sign-out-alt" />
      <NavItem>
        <span>Welcome {localStorage.getItem("user")}!</span>
        <Icons className="far fa-lg fa-compass" />
        <Icons className="far fa-lg fa-heart" />
        <Icons className="fas fa-lg fa-sign-out-alt" onClick={props.login} />
      </NavItem>
    </NavBar>
  );
};

export default SearchBar;
