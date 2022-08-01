import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux/es/exports";
function HeaderOption({ avatar, Icon, title, onClick }) {
  const { user } = useSelector((state) => state.user);
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon sx={{ width: 25, height: 25 }} className="headerOption_icon" />}
      {avatar && (
        <Avatar sx={{ width: 25, height: 25 }} className="headerOption_icon" src={user?.photoUrl}>
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
