import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import InputOption from "../../../common/InputOption";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
import "./post.css";

const post = forwardRef(({ name, email, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="postHeader">
        <Avatar src={photoUrl}> {name[0]}</Avatar>
        <div className="postInfo">
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
      <div className="postBody">
        <p>{message}</p>
      </div>

      <div className="postButtons">
        <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
        <InputOption Icon={ChatIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareIcon} title="Share" color="gray" />
        <InputOption Icon={SendIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default post;
