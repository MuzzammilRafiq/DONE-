import { Link, PhotoOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./CreatePost.css";
import { db } from "./Firebase";
import mzml from "./Images/mzml.jpg";
import firebase from "firebase";
function CreatePost() {
  const [input, setInput] = useState("");

  const [posts, setposts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setposts(
        snapshot.docs.map((doc) => ({
          is: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendpost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: "Mzml Rafiq",
      time: 4,
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };
  return (
    <div className="createPost">
      <img src={mzml} alt="mzml" title="Avatar" />
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Create Post"
        />
        <input type="submit" onClick={sendpost} style={{ display: "none" }} />
      </form>
      <PhotoOutlined style={{ color: "gray", marginRight: "2px" }} />
      <Link style={{ color: "gray" }} />
    </div>
  );
}

export default CreatePost;
