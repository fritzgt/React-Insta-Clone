import React from "react";
import "./App.css";
import withAuthenticate from "./components/authentication/withAuthentication";
import Login from "./components/Login/Login";
import PostsPage from "./components/PostContainer/PostsPage";

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

function App() {
  return (
    <div className="App">
      <ComponentFromWithAuthenticate />
    </div>
  );
}

export default App;
