import React from "react";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  return (
    <div>
      {props.PropsDummyData.map(event => (
        <div>
          <img src={event.thumbnailUrl} />
          <h1>{event.username}</h1>
          <img src={event.imageUrl} />
          <CommentSection CommentArr={event.comments} />
        </div>
      ))}
    </div>
  );
};

export default PostContainer;
