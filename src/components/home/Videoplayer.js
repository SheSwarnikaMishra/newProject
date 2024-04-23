import React,{useState,useRef} from 'react';
import './Videoplayer.css';

const Videoplayer = () => {

    const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const playButtonImage = 'playbutton.png';

  const togglePlay = () => {
    setIsPlaying(prevState => !prevState);
  };

  const handleVideoClick = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    togglePlay();
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        className="video-player"
        onClick={handleVideoClick}
        muted
        poster='poddy.png'
      >
        <source src="live.mp4" type="video/mp4" />
      </video>

      {!isPlaying && (
        <div className="play-button" onClick={handleVideoClick}>
          <img style={{opacity:"0.9"}} src={playButtonImage} alt="Play Button" />
        </div>
      )}
    </div>
  );
};

export default Videoplayer;