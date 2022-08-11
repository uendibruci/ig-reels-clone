import React, { useState, useEffect } from "react";
import "./App.css";
import VideoCard from "./VideoCard";
import axios from "axios";

const url =
  "https://api.airtable.com/v0/app6JIlZMrYy2W9AK/Table%201?api_key=keySRHOI6xf7M04NJ";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((r) => setVideos(r.data.records))
      .catch((error) => console.log(error));
  }, []);
  console.log(videos);

  return (
    <div className="app">
      <div className="app__top">
        <img
          className="app__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/120px-Instagram_logo_2016.svg.png?20210403190622"
          alt="ig logo"
        />

        <h1>Reels</h1>
      </div>

      <div className="app__videos">
        {videos.map((video) => (
          <VideoCard
            channel={video.fields.channel}
            avatarSrc={video.fields.avatarSrc}
            song={video.fields.song}
            url={video.fields.url}
            likes={video.fields.likes}
            shares={video.fields.shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
