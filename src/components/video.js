import React from "react"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video">
    <p align="center">
      <iframe
        src={videoSrcURL}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        width="1400"
        height="788"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </p>
  </div>
)
export default Video
