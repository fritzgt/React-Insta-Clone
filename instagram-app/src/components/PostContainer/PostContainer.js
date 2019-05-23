import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";

const PostContainer = props => {
  return (
    <div>
      {props.PropsDummyData.map(event => (
        <div>
          <img src={event.thumbnailUrl} alt={event.username} />
          <h1>{event.username}</h1>
          <img src={event.imageUrl} alt={event.username} />
          <CommentSection CommentArr={event.comments} />
        </div>
      ))}
    </div>
  );
};

PostContainer.propTypes = {
  postContainer: PropTypes.shape({
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string,
    imageUrl: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.number)
  })
};

export default PostContainer;
