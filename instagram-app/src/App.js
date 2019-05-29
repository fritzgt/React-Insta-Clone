import React from "react";
import "./App.css";
import PostsPage from "./components/PostContainer/PostsPage";
import Login from "./components/Login/Login";
import withAuthenticate from "./components/authentication/withAuthentication";

const ComponentFromWithAuthenticate = withAuthenticate(Login)(PostsPage);

function App() {
  return (
    <div className="App">
      <ComponentFromWithAuthenticate />
    </div>
  );
}

export default App;
