import React from "react";
import makeStyles from "./styles";

const VideoItem = ({ title, link }) => {
  const classes = makeStyles();
  return (
    <div>
      <h3>{title}</h3>
      <iframe
        width="560"
        height="315"
        className={classes.iframe}
        src={link}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoItem;
