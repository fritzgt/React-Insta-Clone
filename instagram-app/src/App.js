import React from "react";
import "./App.css";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        <header>
          <SearchBar />
        </header>
        <PostContainer PropsDummyData={this.state.dummyData} />
      </div>
    );
  }
}

export default App;
