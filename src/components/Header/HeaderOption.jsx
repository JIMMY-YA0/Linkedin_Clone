import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";
function HeaderOption({ avatar, Icon, title, onClick }) {
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon sx={{ width: 25, height: 25 }} className="headerOption_icon" />}
      {avatar && (
        <Avatar sx={{ width: 25, height: 25 }} className="headerOption_icon" src={avatar} />
      )}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
