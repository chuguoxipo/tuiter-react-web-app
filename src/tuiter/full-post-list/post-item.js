import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const PostItem = (
    {
      fullPost = {
        "avatar": "../../images/Elon.jpg",
        "userName": "Elon Musk",
        "handle": "elonmusk",
        "time": "23h",
        "brief": "Amazing show about @Inspiration4x mission!",
        "image": "../../images/inspiration4X.jpeg",
        "title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
        "content":"From training to launch to landing, this all-access docuseries rides along with Inspiration4 crew on the first all-civilian orbital space...",
        "url": "netflix.com",
        "comment": "4.2K",
        "repost":"3.5K",
        "like": "37.5K"
      }
    }
) => {
  return (
      <li className="list-group-item border-secondary">
        <div className="row">
          <div className="col-sm-1 col-md-2">
            <img src={fullPost.avatar} className="rounded-circle w-100" alt="avatar"/>
          </div>
          <div className="col-sm-11 col-md-10">
            <div className="row">
              <div className="col-11">
                <div className="fw-bolder">
                  {fullPost.userName}{" "}
                  <i className="bi-check-circle"></i>{" "}
                  <span className="text-secondary">
                {fullPost.handle}
              </span>
                  <span className="text-secondary">- {fullPost.time}</span>
                </div>
                <p>
                  {fullPost.brief}
                </p>
              </div>
              <div className="col-1">
                <i className="fa-solid fa-ellipsis text-white-50"></i>
              </div>
            </div>
            <div>
              <img src={fullPost.image} className="rounded w-100" alt="image"/>
            </div>
            <div className="border border-secondary rounded-bottom p-2 ">
          <span>
          {fullPost.title}
          </span><br/>
              <span className="text-secondary">
            {fullPost.content}
          </span>
              <span className="text-secondary">{fullPost.url}</span>
            </div>
            <div className="row pt-2">
              <div className="col-3 text-secondary">
                <i className="bi-chat-text"></i>{" "}
                {fullPost.comment}
              </div>
              <div className="col-3 text-secondary">
                <i className="bi-reply"></i>{" "}
                {fullPost.repost}
              </div>
              <div className="col-3 text-secondary">
                <i className="bi-heart"></i>{" "}
                {fullPost.like}
              </div>
              <div className="col-3 text-secondary">
                <i className="bi-share"></i>
              </div>
            </div>
          </div>
        </div>
      </li>
  );
};
export default PostItem;


