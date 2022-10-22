import fullPostsArray from "./fullposts.json";
import PostItem from "./post-item";
import React from "react";

const FullPostList = () => {
  return(
      <ul className="list-group">
        {
          fullPostsArray.map(fullPost =>
              <PostItem
                  key={fullPost._id} fullPost={fullPost}/> )
        }
      </ul>
  );
};
export default FullPostList;