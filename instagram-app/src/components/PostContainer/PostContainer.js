import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import "./PostContainer.css";

const PostContainer = props => {
  return (
    <div className="main-cont">
      {props.PropsDummyData.map(event => (
        <div className="container" key={event.thumbnailUrl}>
          <div className="d-flex user-sec">
            <img
              src={event.thumbnailUrl}
              alt={event.username}
              className="img-fluid thumbnail"
            />
            <h4> {event.username}</h4>
          </div>
          <img
            src={event.imageUrl}
            alt={event.username}
            className="img-fluid"
          />
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
    comments: PropTypes.arrayOf(PropTypes.string)
  })
};

export default PostContainer;
