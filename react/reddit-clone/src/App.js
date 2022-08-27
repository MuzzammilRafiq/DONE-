import React from "react";
import "./App.css";
import Create from "./Components/Create";
import Header from "./Components/Header";
import More from "./Components/More";
import NewsCommunities from "./Components/NewsCommunities";
import Post from "./Components/Post";
function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <Post />
        <div className="sidebar">
          <NewsCommunities />
          <Create />
          <More />
        </div>
      </div>
    </div>
  );
}
export default App;
