import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
function Sidebar() {
  const { user } = useSelector((state) => state.user);
  const recentItem = (topic) => (
    <div className="sidebarRecnetItem">
      <span className="sidebarHash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="Sidebar">
      <div className="siderbarTop">
        <img src="https://cdn.wallpapersafari.com/80/66/ZOgtbI.jpg" alt="" />
        <Avatar src={user.photoUrl} className="sidebarAvatar">
          {user.displayName[0].toUpperCase()}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="siderbarStats">
        <div className="siderbarStat">
          <p>Who viewed you</p>
          <p className="sidebarStateNumber">2,134</p>
        </div>
        <div className="siderbarStat">
          <p>Views on post</p>
          <p className="sidebarStateNumber">1,668</p>
        </div>
      </div>

      <div className="sidebarBottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("fullStack")}
        {recentItem("design")}
        {recentItem("redux")}
      </div>
    </div>
  );
}

export default Sidebar;
