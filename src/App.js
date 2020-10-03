import React, { useState, useEffect } from "react";
import db from "./firebase";
import "./App.css";
import Video from "./Video";
import { Search, Inbox, Home, Person } from "@material-ui/icons";
import AddVideo from "./AddVideo";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, [videos]);

  return (
    <div className="app">
      <div className="app_videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
      </div>
      <div className="app_dashboard">
        <div className="app_dashboard_option">
          <Home />
          <h5>Home</h5>
        </div>
        <div className="app_dashboard_option">
          <Search />
          <h5>Discover</h5>
        </div>
        <div className="app_dashboard_option">
          <AddVideo />
        </div>
        <div className="app_dashboard_option">
          <Inbox />
          <h5>Inbox</h5>
        </div>
        <div className="app_dashboard_option">
          <Person />
          <h5>Me</h5>
        </div>
      </div>
    </div>
  );
}

export default App;
