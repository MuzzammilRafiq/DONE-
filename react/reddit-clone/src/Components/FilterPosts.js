import {
  BrightnessLowOutlined,
  EjectOutlined,
  ExpandMore,
  PublishOutlined,
  TrendingUpOutlined,
  ViewAgendaOutlined,
  WhatshotOutlined,
} from "@material-ui/icons";
import React from "react";
import "./FilterPosts.css";
function FilterPosts() {
  return (
    <div className="filterPosts">
      <div className="filterPosts_options" style={{color:"blue"}}>
        <EjectOutlined />
        <p >Best</p>
      </div>
      <div className="filterPosts_options">
        <WhatshotOutlined />
        <p>Hot</p>
      </div>
      <div className="filterPosts_options">
        <BrightnessLowOutlined />
        <p>New</p>
      </div>
      <div className="filterPosts_options">
        <PublishOutlined />
        <p>Top</p>
      </div>
      <div className="filterPosts_options">
        <TrendingUpOutlined />
        <p>Rising</p>
      </div>
      <div className="filterPosts_options_2">
        <ViewAgendaOutlined />
        <ExpandMore />
      </div>
    </div>
  );
}

export default FilterPosts;
