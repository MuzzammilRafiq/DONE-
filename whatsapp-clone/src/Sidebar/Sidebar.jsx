import { Avatar, IconButton } from "@material-ui/core";
import { Chat, DonutLarge, MoreVert, SearchOutlined } from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
       Avatar src="https://avatars.githubusercontent.com/u/79247140?v=4"/>
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat/>
          </IconButton>
          <IconButton>
            <MoreVert/>
          </IconButton>
        </div>

      </div>

      <div className="sidebar_search">
        <SearchOutlined/>
        <input type="text"/>
      </div>

      <div className="sidebar_chat">
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
      </div>

    </div>
  );
}

export default Sidebar;
