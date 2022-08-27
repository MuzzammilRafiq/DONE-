import React from "react";
import "./Create.css";
import solar from "./Images/solar.jpg";
import Avatar from "./Images/Avatar.png";
function Create() {
  return (
    <div className="create">
      <img src={solar} alt="solar" className="_" />
      <br />
      <img src={Avatar} alt="" className="_0_" />
      <p style={{marginLeft:'50px',marginTop:'-35px'}}>Home</p>
      <p style={{marginLeft:"10px"}}>
        Your personal Reddit frontpage. Come here
        to check in with your favorite communities.
      </p>
      <button className="create_post">Create Post</button><br/>
      <button className="create_community">Create Community</button>
    </div>
  );
}

export default Create;
