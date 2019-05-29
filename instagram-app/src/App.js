import React from "react";
import "./App.css";
import PostsPage from "./components/PostContainer/PostsPage";
import withAuthenticate from "./components/authentication/withAuthentication";

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

function App() {
  return (
    <div className="App">
      <ComponentFromWithAuthenticate />
    </div>
  );
}
// }

export default App;
