import React from "react";
import dummyData from "../../dummy-data";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      searchTerm: ""
    };
  }

  componentDidMount() {
    this.setState({
      dummyData: dummyData
    });
  }

  incrementLikes = event => {
    // console.log(event.liked);
    this.setState({
      dummyData: this.state.dummyData.map(post => {
        if (event.imageUrl === post.imageUrl && event.liked === false) {
          // console.log("Selected likes " + post.likes);
          return {
            ...post,
            likes: 1 + post.likes,
            liked: true
          };
        } else if (event.imageUrl === post.imageUrl && event.liked === true) {
          return {
            ...post,
            likes: post.likes - 1,
            liked: false
          };
        }
        // console.log("Other likes " + post.likes);
        return post;
      })
    });
  };

  //handler for search
  handleSearch = term => {
    // console.log(term.target.value);
    this.setState({
      searchTerm: term.target.value
    });
  };

  //filter for search func
  submitSearch = term => {
    term.preventDefault();
    let searchTerm = this.state.searchTerm;
    // let foundResult = searchTerm === post.username;
    // console.log(searchTerm);
    this.setState({
      dummyData: this.state.dummyData.filter(
        post => searchTerm === post.username
      )
    });
  };

  logOut = e => {
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
      <div className="App">
        <header>
          <SearchBar
            submitSearch={this.submitSearch}
            handleSearch={this.handleSearch}
            searchTerm={this.state.searchTerm}
            login={this.logOut}
          />
        </header>
        <PostContainer
          propsDummyData={this.state.dummyData}
          incrementLikes={this.incrementLikes}
        />
      </div>
    );
  }
}

export default PostsPage;
