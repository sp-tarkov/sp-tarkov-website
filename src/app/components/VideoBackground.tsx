import React from 'react';

const VideoBackground = () => {
  return (
    <div className="video-wrapper" aria-hidden="true">
      <video autoPlay muted loop playsInline>
        <source src="https://static.sp-tarkov.com/background.mp4" type="video/mp4" />
      </video>
      <div className="video-overlay backdrop-blur-sm bg-black/70" />
    </div>
  );
};

export default VideoBackground; 