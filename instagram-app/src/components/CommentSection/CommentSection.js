import React from "react";
import PropTypes from "prop-types";
import "./CommentSection.css";
import UserAndComment from "../Styles/Reusables/UserAndComment";

class CommentSection extends React.Component {
  state = {
    comments: this.props.commentArr,
    newComment: ""
  };

  //Passing item to the array
  addNewComment = () => {
    let comment = {
      username: localStorage.getItem("user"),
      // get message from state newComment
      text: this.state.newComment
    };
    this.setState({
      comments: [...this.state.comments, comment]
    });
  };

  //Handle change to add value to the name
  handleChange = event => {
    // console.log("handleChange: " + event.target.value);
    // set the state to the value of the input
    this.setState({
      newComment: event.target.value
    });
  };

  //Passing item to the array
  submitComment = e => {
    e.preventDefault();
    this.setState({
      newComment: ""
    });
    this.addNewComment(this.state.newComment);
  };

  render() {
    return (
      <div className="comment-secction">
        {/* mapping over the comments array */}
        {this.state.comments.map(comment => (
          <div key={comment.text}>
            <p>
              <UserAndComment type="light">{comment.username} </UserAndComment>
              {comment.text}
            </p>
          </div>
        ))}
        {/* input field to add new comment */}
        <form onSubmit={this.submitComment}>
          <input
            placeholder="Add a comment..."
            className="form-control"
            type="text"
            value={this.state.comment}
            name="comment"
            onChange={this.handleChange}
            required
          />
        </form>
      </div>
    );
  }
}

// Checking data types
CommentSection.propTypes = {
  commentArr: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  )
};

export default CommentSection;
