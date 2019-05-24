import React from "react";
import PropTypes from "prop-types";
import "./CommentSection.css";

const CommentSection = props => {
  return (
    <div className="comment-secction">
      {props.commentArr.map(comment => (
        <div key={comment.text}>
          <p>
            <strong>{comment.username} </strong>
            {comment.text}
          </p>
        </div>
      ))}
      <form>
        <input placeholder="Add a comment..." className="form-control" />
      </form>
    </div>
  );
};

CommentSection.propTypes = {
  commentArr: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  )
};

export default CommentSection;
