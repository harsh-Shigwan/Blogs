import React from "react";
import edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
const Single = () => {
  return (
    <div className="single">
      {/* Content Section */}
      <div className="content">
        <img
          src="https://img.freepik.com/free-vector/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy-vector-isolated-concept-metaphor-illustration_335657-855.jpg"
          alt="Blogging illustration"
        />
        <div className="user">
          <img
            src="https://www.fcriindia.com/wp-content/uploads/2016/07/PASSPORT-SIZE.jpg"
            alt="User"
          />
          <div className="info">
            <span>Harsh</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
          <Link to={`/write?edit=2`}>
            <img src={edit} alt="Edit" />
          </Link>
          <img src={Delete} alt="Delete" />
        </div>
        </div>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      {/* Menu Section */}
      <Menu></Menu>
    </div>
  );
};

export default Single;
