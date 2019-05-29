import React from "react";
import "./Login.css";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      userName: ""
    };
  }
  //     handleChange = e => {
  //       console.log(e.taget.value);
  //       this.setState({
  //         userName: e.taget.value
  //       });
  //     };
  //   }

  login = e => {
    e.preventDefault();
    // console.log(e);
    if (localStorage.getItem("user")) {
      localStorage.removeItem("user");
      this.setState({ isLoggedIn: false });
    } else {
      localStorage.setItem("user", "Fritz");
      this.setState({ isLoggedIn: true });
    }
  };

  render() {
    return (
      <div className="login-container">
        <form>
          <input
            type="text"
            placeholder="User Name"
            // onChange={this.handleChange}
            // value={this.state.userName}
            name="userName"
          />
          <input type="password" placeholder="Password" />
          <button onClick={this.login}> Login </button>
        </form>
      </div>
    );
  }
}

export default Login;
