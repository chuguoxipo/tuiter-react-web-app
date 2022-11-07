import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const ProfileComponent = () => {
  const profile
      = useSelector(state => state.profile);
  return (
      <li className="list-group-item border-soft">
        <div className="row pt-2">
          <div className="col-1">
            <i className="bi-arrow-left fw-bold"></i>{" "}
          </div>
          <div className="col-10">
            <span className="fw-bold">{profile.firstName}{" "}{profile.lastName}</span><br/>
            <span className="text-secondary">2,111 Tweets</span>
          </div>
        </div>
        <img className="mb-2 w-100" height={300} width= {650} src={`/images/${profile.bannerPicture}`}/>
        <div className="position-relative">
          <Link to="/tuiter/edit-profile">
            <input type="button" className="btn w-15 float-end fw-bold border-secondary rounded-pill" value='Edit Profile'></input>
          </Link>
          <img className="rounded-circle position-absolute wd-nudge-up-50" height={120} src={`/images/${profile.profilePicture}`}/>
        </div>
        <br/><br/>
        <div className="mb-3">
          <span className="fw-bold">{profile.firstName}{" "}{profile.lastName}</span><br/>
          <span className="text-secondary">{profile.handle}</span>
        </div>
        <div className="mb-3">
          {profile.bio}
        </div>
        <div className="mb-3">
          <i className="bi-pin-map"></i>{" "}
          <span className="wd-margin-right">{profile.location}</span>
          <i className="bi-balloon"></i>{" "}
          <span className="wd-margin-right">{profile.dateOfBirth}</span>
          <i className="bi-calendar"></i>{" "}
            <span className="wd-margin-right">{profile.dateJoined}</span>
        </div>
        <div>
          <span className="fw-bold">{profile.followingCount}</span>{" "}
          <span className="wd-margin-right">Following</span>
          <span className="fw-bold">{profile.followersCount}</span>{" "}
          <span className="wd-margin-right">Followers</span>
        </div>

      </li>
  );
};


export default ProfileComponent;
