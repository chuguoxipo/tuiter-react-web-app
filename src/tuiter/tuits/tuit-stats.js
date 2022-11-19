import React from "react";
import {updateTuitThunk}
  from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";


const TuitStats = (
    {
      tuit = {
        "_id": 234,
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
        "image": "spacex.png",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
      }
    }
) => {
  const dispatch = useDispatch();
  return (
      <div className="row pt-2">
        <div className="col-3 text-secondary">
          <i className="bi-chat-text"></i>{" "}
          {tuit.replies}
        </div>
        <div className="col-3 text-secondary">
          <i className="bi-reply"></i>{" "}
          {tuit.retuits}
        </div>
        <div className="col-3 text-secondary">
          <i onClick={() => dispatch(updateTuitThunk({
            ...tuit,
            likes: tuit.likes + 1
          }))} className="bi bi-heart-fill me-2 text-danger"></i>{" "}
          {tuit.likes}
        </div>
        <div className="col-3 text-secondary">
          <i onClick={() => dispatch(updateTuitThunk({
            ...tuit,
            dislikes: tuit.dislikes + 1
          }))} className="bi bi-hand-thumbs-down-fill me-2 text-secondary"></i>{" "}
          {tuit.dislikes}
        </div>
        <div className="col-3 text-secondary">
          <i className="bi-share"></i>
        </div>
      </div>
  );
};
export default TuitStats;
