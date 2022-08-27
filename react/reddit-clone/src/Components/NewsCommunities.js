import React from "react";
import "./NewsCommunities.css";
import comm from "./Images/quote.png";
import _1_ from "./Images/billi.jpg";
import _2_ from "./Images/drake.jpg";
import _3_ from "./Images/dontknow.jpg";
import _4_ from "./Images/quote.png";
import { ExpandLess } from "@material-ui/icons";
function NewsCommunities() {
  return (
    <div className="newsCommunities">
      <div className="newsCommunities_image">
        <img src={comm} alt="img" />
        <h3>Top News Communities</h3>
      </div>
      {/* 1 */}
      <div className="newsCommunities_Commu">
        1 <ExpandLess style={{ color: "#46d160" }} />
        <img src={_1_} alt="1" /> <p>r/Olympics</p>
      </div>
      {/* 2 */}
      <div className="newsCommunities_Commu">
        2 <ExpandLess style={{ color: "#46d160" }} />
        <img src={_2_} alt="2" /> <p>r/CursedComments</p>
      </div>
      {/* 3 */}
      <div className="newsCommunities_Commu">
        3 <ExpandLess style={{ color: "#46d160" }} />
        <img src={_3_} alt="3" /> <p>r/HoldUp</p>
      </div>
      {/* 4 */}
      <div className="newsCommunities_Commu" style={{ border: "none" }}>
        4 <ExpandLess style={{ color: "#46d160" }} />
        <img src={_4_} alt="4" /> <p>r/memes</p>
      </div>
      <button>View All</button>
      <div className="someMore">
        <p>Near You</p>
        <p>Gaming</p>
        <p>sports</p>
        <p>Aww</p>
      </div>
    </div>
  );
}

export default NewsCommunities;
