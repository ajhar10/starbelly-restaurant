import React, { useState } from "react";
import { meal } from "../../constants";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

import "./Intro.css";

const Intro = () => {
  const [videoPlay, setVideoPlay] = useState(false);
  const vidRef = React.useRef();
  const handleVideo = () => {
    setVideoPlay((prevVideoPlay) => !prevVideoPlay);
    if (videoPlay) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
    <div className="app__video ">
      <video
        ref={vidRef}
        src={meal}
        loop
        muted
        type="video/mp4"
        controls={false}
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center "
          onClick={handleVideo}
        >
          {videoPlay ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
