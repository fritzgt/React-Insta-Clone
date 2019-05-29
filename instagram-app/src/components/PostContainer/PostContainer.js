import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import "./PostContainer.css";

const PostContainer = props => {
  return (
    <div className="main-cont">
      {/* mapping over the dummy object */}
      {props.propsDummyData.map(event => (
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
          <div className="like-sec">
            <i
              // toggle class to show full red heart
              className={`far fa-lg fa-heart ${event.liked ? "fas liked" : ""}`}
              onClick={() => props.incrementLikes(event)}
            />
            <i className="far fa-lg fa-comment" />
            <p>{event.likes} likes</p>
          </div>
          <CommentSection commentArr={event.comments} />
        </div>
      ))}
    </div>
  );
};

// Checking data types
PostContainer.propTypes = {
  propsDummyData: PropTypes.PropTypes.arrayOf(
    PropTypes.shape({
      thumbnailUrl: PropTypes.string,
      username: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.number,
      comments: PropTypes.arrayOf(PropTypes.object)
    })
  )
};

export default PostContainer;
