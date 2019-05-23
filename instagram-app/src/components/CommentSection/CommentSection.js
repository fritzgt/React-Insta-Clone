import React from "react";

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

export default CommentSection;
