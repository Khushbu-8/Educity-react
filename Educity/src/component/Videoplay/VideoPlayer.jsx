import React, { useRef } from "react";
import "./videoPlayer.css";
import video from "../../../public/college-video.mp4";

const VideoPlayer = ({ play, setplay }) => {
  const player = useRef(null);
  const closePlayer = (e) =>{
    if (e.target ===player.current) {
        setplay(false)
    }

  }

  return (
    <div className={`videoplayer ${play ? "" : "hide"}`} ref={player} onClick={closePlayer}>
      <video autoPlay muted controls src={video}></video>
    </div>
  );
};

export default VideoPlayer;
