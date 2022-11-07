import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const paths = pathname.split('/')
  const active = paths[2];
  return (
      <div className="list-group">
        <div className="list-group">
          <a href="#" className="list-group-item">
            <i className="icon bi-twitter"></i></a>
          <Link to="/tuiter" className={`list-group-item ${paths.length === 2?'active':''}`}>
          <div className="row">
              <div className="col-2">
                <i className="icon bi-house"></i>
              </div>
              <div className="col-10 d-none d-xl-block">Home</div>
            </div>
          </Link>
          <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
          <div className="row">
              <div className="col-2">
                <i className="icon bi-hash"></i>
              </div>
              <div className="col-10 d-none d-xl-block">Explore</div>
            </div>
          </Link>
          <a href="#" className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
            <div className="row">
              <div className="col-2">
                <i className="icon bi-bell"></i>
              </div>
              <div className="col-10 d-none d-xl-block">Notifications</div>
            </div>
          </a>
          <a href="#" className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
            <div className="row">
              <div className="col-2">
                <i className="icon bi-envelope"></i>
              </div>
              <div className="col-10 d-none d-xl-block">Messages</div>
            </div>
          </a>
          <a href="#" className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
            <div className="row">
              <div className="col-2">
                <i className="icon bi-bookmark"></i>
              </div>
              <div className="col-10 d-none d-xl-block">Bookmarks</div>
            </div>
          </a>
          <a href="#" className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
            <div className="row">
              <div className="col-2">
                <i className="icon bi-list"></i>
              </div>
              <div className="col-10 d-none d-xl-block">Lists</div>
            </div>
          </a>
          <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
            <div className="row">
              <div className="col-2">
                <i className="icon bi-people"></i>
              </div>
              <div className="col-10 d-none d-xl-block">Profile</div>
            </div>
          </Link>
          <a href="#" className={`list-group-item
                    ${active === 'more'?'active':''}`}>
            <div className="row">
              <div className="col-2">
                <i className="icon bi-info"></i>
              </div>
              <div className="col-10 d-none d-xl-block">More</div>
            </div>
          </a>
          <Link to="/" className="list-group-item">
            Labs
          </Link>
        </div>
      </div>
  );
};
export default NavigationSidebar;


