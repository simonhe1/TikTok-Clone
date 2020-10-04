import React, { useState, useEffect } from "react";
import "./Home.css";
import db from "./firebase";
import Video from "./Video";

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, [videos]);

  return (
    <div className="home">
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
  );
};

export default Home;
