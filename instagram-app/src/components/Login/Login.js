import React from "react";
import "./Login.css";

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
      <div className="login-container">
        <div className="navbar-brand login-brand" href="#">
          <i className="fab fa-lg fa-instagram" />
          <span className="brand"> Instagram </span>
        </div>

        <form onSubmit={this.login}>
          <input
            placeholder="User Name"
            type="text"
            value={this.state.userName}
            onChange={this.handleChange}
            name="userName"
            // required
          />
          <input
            type="current-password"
            placeholder="Password"
            type="text"
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
          />
          <button> Login </button>
        </form>
      </div>
    );
  }
}

export default Login;
