import {
  BookmarkBorderOutlined,
  CardGiftcardOutlined,
  ChatBubbleOutlineOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
  Redo,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./PostS.css";
import billi from './Images/billi.jpg';
function PostS({ name, time, message }) {

  const [color, setColor] = useState("black");

  function changeOrange(e) {
    setColor("orange");
    console.log(e.style.color);

  }
  function changeBlue(clrB) {
    setColor(clrB);
  }
  function changeBlack(clrBl) {
    setColor(clrBl);
  }
  return (
    <div className="postS">
      <div className="postS_vote" style={{ cursor: "pointer", color }}>
        <KeyboardArrowUp onClick={() => changeOrange("orange")} />
        <p onClick={() => changeBlack("black")} style={{ margin: "0px" }}>7.3k</p>
        <KeyboardArrowDown onClick={() => changeBlue("blue")} />
      </div>

      <div className="postS_other">
        <p>
          Posted by u/{name} {time} ago
        </p>
        <p className="message">{message}</p>
        <div className="PostS_otherThings">
          <div className="_">
            <ChatBubbleOutlineOutlined /> <p>17.8k_Comments</p>
          </div>
          <div className="_">
            <CardGiftcardOutlined /> <p>Award</p>
          </div>
          <div className="_">
            <Redo /> <p>Share</p>
          </div>
          <div className="_">
            <BookmarkBorderOutlined /> <p>Save</p>
          </div>
          <div className="_">
            <MoreHoriz />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostS;
