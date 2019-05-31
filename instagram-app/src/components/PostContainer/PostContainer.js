import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import "./PostContainer.css";
import styled from "styled-components";
import UserAndComment from "../Styles/Reusables/UserAndComment";

// JS styles

const PostCont = styled.div`
  max-width: 700px;
  margin: 0 auto;
  margin-bottom: 50px;
  text-align: left;
`;

const PostItem = styled.div`
  display: flex;
  padding: 30px 0;
  align-content: center;
`;

const ThumbNail = styled.img`
  height: 40px;
  width: auto;
  border-radius: 40px;
  margin: 0 10px;
`;

const LikesCont = styled.div`
  margin: 20px 5px;
  font-size: 1.1rem;
`;

const Icons = styled.i`
  padding-right: 15px;

  :hover {
    font-size: 1.6rem;
  }
`;

// End of JS styles

const PostContainer = props => {
  return (
    <PostCont>
      {/* mapping over the dummy object */}
      {props.propsDummyData.map(event => (
        <div key={event.thumbnailUrl}>
          <PostItem>
            <ThumbNail src={event.thumbnailUrl} alt={event.username} />
            <UserAndComment type="bold">{event.username} </UserAndComment>
          </PostItem>
          <img
            src={event.imageUrl}
            alt={event.username}
            className="img-fluid"
          />
          <LikesCont>
            <Icons
              // toggle class to show full red heart
              className={`far fa-lg fa-heart ${event.liked ? "fas liked" : ""}`}
              onClick={() => props.incrementLikes(event)}
            />
            <Icons className="far fa-lg fa-comment" />
            <p>
              {event.likes}
              <span> likes</span>
            </p>
          </LikesCont>
          <CommentSection commentArr={event.comments} />
        </div>
      ))}
    </PostCont>
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
