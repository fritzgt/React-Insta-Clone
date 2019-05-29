import React from "react";

const withAuthenticate = firstComp => secondComp =>
  class extends React.Component {
    render() {
      if (localStorage.getItem("user")) {
        return <firstComp />;
      } else {
        return <secondComp />;
      }
    }
  };

export default withAuthenticate;
