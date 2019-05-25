import React from "react";
import PropTypes from "prop-types";
import "./CommentSection.css";

class CommentSection extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="comment-secction">
        {/* mapping over the comments array */}
        {this.props.commentArr.map(comment => (
          <div key={comment.text}>
            <p>
              <strong>{comment.username} </strong>
              {comment.text}
            </p>
          </div>
        ))}
        {/* input field to add new comment */}
        <form>
          <input placeholder="Add a comment..." className="form-control" />
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
