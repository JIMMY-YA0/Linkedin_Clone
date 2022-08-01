import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import HeaderOption from "./HeaderOption";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { auth } from "../../firebase";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { logout } from "../../app/userSlice";

function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="headerLeft">
        <img
          src="https://lawyermeltdown.com/wp-content/uploads/2014/03/Official-LinkedIn-InBug-2CRev.png"
          alt=""
        />
        <div className="headerSearch">
          <SearchIcon />
          <input type="text" placeholder="search" />
        </div>
      </div>
      <div className="headerRight">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption onClick={logoutOfApp} avatar={true} title="Me" />
      </div>
    </div>
  );
}

export default Header;
