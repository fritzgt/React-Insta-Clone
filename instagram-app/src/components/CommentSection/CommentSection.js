import React from "react";

const CommentSection = props => {
  return (
    <div>
      {props.CommentArr.map(comment => (
        <div>
          <h4>{comment.username}</h4>
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentSection;
