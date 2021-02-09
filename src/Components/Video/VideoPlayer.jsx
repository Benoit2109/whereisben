import React from "react";
import ReactPlayer from "react-player";

import styles from "./VideoPlayer.module.css";

export default function VideoPlayer() {
  return (
    <div className={styles.videoContainer}>
      <ReactPlayer
        className={styles.Video}
        url="https://www.youtube.com/watch?v=-26CN-t1fMw&t=1s"
        width="100%"
        height="80vh"
      />
    </div>
  );
}
