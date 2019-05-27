import React from "react";
import "./App.css";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      liked: false
    };
  }

  componentDidMount() {
    this.setState({
      dummyData: dummyData
    });
  }

  incrementLikes = event => {
    this.setState({
      dummyData: this.state.dummyData.map(post => {
        if (event.imageUrl === post.imageUrl && event.liked === post.liked) {
          // console.log("Selected likes " + post.likes);
          return {
            ...post,
            likes: 1 + post.likes,
            liked: true
          };
        }
        // console.log("Other likes " + post.likes);
        return post;
      })
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <SearchBar />
        </header>
        <PostContainer
          propsDummyData={this.state.dummyData}
          incrementLikes={this.incrementLikes}
        />
      </div>
    );
  }
}

export default App;
