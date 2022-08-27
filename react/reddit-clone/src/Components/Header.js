import { IconButton } from "@material-ui/core";
import {
  AddOutlined,
  CallMade,
  ExpandMore,
  Home,
  InsertChartOutlined,
  MissedVideoCallOutlined,
  MonetizationOnOutlined,
  NotificationsOutlined,
  Search,
  TextsmsOutlined,
} from "@material-ui/icons";
import React from "react";
import "./Header.css";
import logo from "./Images/logo.png";
function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img src={logo} style={{ height: "55px" }}  alt="logo"/>
        <div className="Header_leftJoined">
          <Home />
          <p>Home</p>
          <ExpandMore />
        </div>
      </div>

      <div className="header_middle">
        <form>
          <Search />
          <input type="text" placeholder="Search reddit" />
          <input type="submit" value="submit" style={{ display: "none" }} />
        </form>
      </div>
      <div className="header_right">
        <IconButton><CallMade /> </IconButton>
        <IconButton><InsertChartOutlined /> </IconButton>
        <IconButton><MissedVideoCallOutlined /> </IconButton>
        <IconButton><TextsmsOutlined /> </IconButton>
        <IconButton><NotificationsOutlined /> </IconButton>
        <IconButton><AddOutlined /> </IconButton>
        <div className="header_rightCoins">
          <MonetizationOnOutlined />
          <p>Free</p>
        </div>

        <div className="Header_RightSelf">
          <p>localhost:3000</p>
          <ExpandMore />
        </div>
      </div>
    </div>
  );
}

export default Header;
