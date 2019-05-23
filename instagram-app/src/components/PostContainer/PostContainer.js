import React from "react";
import { EVENTS } from "saxes";

const PostContainer = props => {
  return (
    <div>
      {props.PropsDummyData.map(event => (
        <div>
          <img src={event.thumbnailUrl} />
          <h1>{event.username}</h1>
          <img src={event.imageUrl} />
        </div>
      ))}
    </div>
  );
};

export default PostContainer;
