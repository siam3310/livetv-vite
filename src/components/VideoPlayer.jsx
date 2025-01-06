import React from "react";

const VideoPlayer = ({ url }) => {
  return (
    <div className="mb-4">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          src={url}
          title="Live Stream"
          className="embed-responsive-item w-100"
          frameBorder="0"
          allow="fullscreen"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
