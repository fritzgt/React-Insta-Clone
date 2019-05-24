import React from "react";
import PropTypes from "prop-types";
import "./CommentSection.css";

const CommentSection = props => {
  return (
    <div className="comment-secction">
      <i className="far fa-lg fa-heart" />
      <i className="far fa-lg fa-comment" />
      <p>345 likes</p>
      {props.CommentArr.map(comment => (
        <div>
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
  Comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
};

export default CommentSection;
