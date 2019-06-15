import React from "react";
// import "./Login.css";
import styled from "styled-components";

// CSS/JS styles
const LogInCont = styled.div`
  padding-top: 300px;
`;

const LogInBrand = styled.div`
  position: absolute;
  left: 15px;
  top: 8px;
  font-size: 1.2rem;
`;

// End of CSS/JS styles

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: "",
      loggedIn: false
    };
  }

  //loggedIn not updating state as expected
  componentDidMount() {
    // console.log("loggedIn: " + this.state.loggedIn);
    // if (localStorage.getItem("user")) {
    //   this.setState({ loggedIn: true });
    // } else {
    //   this.setState({ loggedIn: false });
    // }
  }

  //Handle change to add value to the name
  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  login = e => {
    // e.preventDefault();
    // console.log(e);
    if (localStorage.getItem("user")) {
      localStorage.removeItem("user");
      localStorage.removeItem("password");
    } else {
      localStorage.setItem("user", this.state.userName);
      localStorage.setItem("password", this.state.password);
    }
  };

  render() {
    return (
      <LogInCont>
        <LogInBrand>
          <i className="fab fa-lg fa-instagram" />
          <span> Instagram </span>
        </LogInBrand>
        <form onSubmit={this.login}>
          <input
            placeholder="User Name"
            type="text"
            value={this.state.userName}
            onChange={this.handleChange}
            name="userName"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
            required
          />
          <button> Login </button>
        </form>
      </LogInCont>
    );
  }
}

export default Login;
