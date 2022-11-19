import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
// import {deleteTuit} from "../reducers/tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = (
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
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }
  return (
      <li className="list-group-item border-soft">
        <div className="row">
          <div className="col-sm-1 col-md-2">
            <img src={`/images/${tuit.image}`} className="rounded-circle" height={50} alt="avatar"/>
          </div>
          <div className="col-sm-11 col-md-10">
            <div className="row">
              <div className="col-11">
                <div className="fw-bolder">
                  <i className="bi bi-x-lg float-end"
                     onClick={() => deleteTuitHandler(tuit._id)}></i>
                  {tuit.userName}{" "}
                  <i className="bi-check-circle"></i>{" "}
                  <span className="text-secondary">
                {tuit.handle}
              </span>
                  <span className="text-secondary">- {tuit.time}</span>
                </div>
                {/*<p>*/}
                {/*  {fullPost.brief}*/}
                {/*</p>*/}
              </div>
              <div className="col-1">
                <i className="fa-solid fa-ellipsis text-white-50"></i>
              </div>
            </div>
            {/*<div>*/}
            {/*  <img src={fullPost.image} className="rounded w-100" alt="image"/>*/}
            {/*</div>*/}
            <div>
          {/*<span>*/}
          {/*{fullPost.title}*/}
          {/*</span><br/>*/}
              <span>
            {tuit.tuit}
          </span>
              {/*<span className="text-secondary">{tuit.url}</span>*/}
            </div>
            {/*<div className="row pt-2">*/}
            {/*  <div className="col-3 text-secondary">*/}
            {/*    <i className="bi-chat-text"></i>{" "}*/}
            {/*    {tuit.replies}*/}
            {/*  </div>*/}
            {/*  <div className="col-3 text-secondary">*/}
            {/*    <i className="bi-reply"></i>{" "}*/}
            {/*    {tuit.retuits}*/}
            {/*  </div>*/}
            {/*  <div className="col-3 text-secondary">*/}
            {/*    <i className="bi-heart"></i>{" "}*/}
            {/*    {tuit.likes}*/}
            {/*  </div>*/}
            {/*  <div className="col-3 text-secondary">*/}
            {/*    <i className="bi-share"></i>*/}
            {/*  </div>*/}
            {/*</div>*/}
            <TuitStats key={tuit._id} tuit={tuit}/>
          </div>
        </div>
      </li>
  );
};
export default TuitItem;


