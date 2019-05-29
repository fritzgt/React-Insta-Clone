import React from "react";
import "./Login.css";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      userName: ""
    };
  }

  handleChange = e => {
    console.log(e.taget.value);
    this.setState({
      userName: e.taget.value
    });
  };

  login = e => {
    // e.preventDefault();
    // console.log(e);
    if (localStorage.getItem("user")) {
      localStorage.removeItem("user");
    } else {
      localStorage.setItem("user", "Fritz");
    }
  };

  componentDidMount() {
    console.log("Current state: " + this.state.loggedIn);
    if (localStorage.getItem("user")) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
    console.log("Latest state: " + this.state.loggedIn);
  }

  render() {
    return (
      <div className="login-container">
        <div className="navbar-brand login-brand" href="#">
          <i className="fab fa-lg fa-instagram" />
          <span className="brand"> Instagram </span>
        </div>

        <form>
          <input
            placeholder="User Name"
            type="text"
            value={this.state.userName}
            onChange={this.handleChange}
            name="userName"
            // required
          />
          <input type="current-password" placeholder="Password" />
          <button onClick={this.login}> Login </button>
        </form>
      </div>
    );
  }
}

export default Login;
