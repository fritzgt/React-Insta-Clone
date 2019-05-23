import React from "react";
import PropTypes from "prop-types";

const CommentSection = props => {
  return (
    <div>
      {props.CommentArr.map(comment => (
        <div>
          <p>
            <strong>{comment.username} </strong>
            {comment.text}
          </p>
        </div>
      ))}
      <input placeholder="Add a comment..." />
    </div>
  );
};

CommentSection.propTypes = {
  Comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
};

export default CommentSection;
