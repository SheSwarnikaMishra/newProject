import React from "react";
import "./LiveStreaming.css";
const LiveStreaming = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
     <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ebPcpxsKFzM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  );
};

export default LiveStreaming;
