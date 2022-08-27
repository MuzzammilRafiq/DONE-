import React, { useEffect, useState } from "react";
import "./Post.css";
import FilterPosts from "./FilterPosts";
import PostS from "./PostS";
import { Link, PhotoOutlined } from "@material-ui/icons";
import { db } from "./Firebase";
import mzml from "./Images/mzml.jpg";
import firebase from "firebase";
function Post() {
  const [input, setInput] = useState("");

  const [posts, setposts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
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
      message: input,
      time: "8 hours",
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="post">
      {/* <CreatePost /> */}
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

      <FilterPosts />

      {posts.map((post) => (
        <PostS
          key={post.id}
          name={post.data.name}
          time={post.data.time}
          message={post.data.message}
        />
      ))}
    </div>
  );
}

export default Post;
