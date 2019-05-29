import React from "react";

const withAuthenticate = Login => App =>
  class extends React.Component {
    render() {
      if (localStorage.getItem("user")) {
        return <App />;
      } else {
        return <Login />;
      }
    }
  };

export default withAuthenticate;
