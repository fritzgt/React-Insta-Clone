import React from "react";
import PropTypes from "prop-types";
import "./CommentSection.css";

class CommentSection extends React.Component {
  state = {
    comments: this.props.commentArr,
    newComment: " "
  };

  //Handle change to add value to the name
  handleChange = event => {
    console.log("handleChange: " + event.target.value);
    this.setState({
      newComment: event.target.value
    });
  };

  //Passing item to the array
  addNewComment = e => {
    e.preventDefault();
    let comment = {
      // Hardcode user name
      username: "Fritz",
      // get message frim state newComment
      text: this.state.newComment
    };
    this.setState({
      comments: [...this.state.comments, comment]
    });
  };

  render() {
    return (
      <div className="comment-secction">
        {/* mapping over the comments array */}
        {this.state.comments.map(comment => (
          <div key={comment.text}>
            <p>
              <strong>{comment.username} </strong>
              {comment.text}
            </p>
          </div>
        ))}
        {/* input field to add new comment */}
        <form onSubmit={this.addNewComment}>
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
