import React, { useState, useRef, useEffect } from "react";
import './audioplayer.css';

import audioSrc from './2.mp3';
import img from './1.jpg';
import pauseIcon from './pause.png';
import playIcon from './play.png';

const AudioPlayer = () => {
  const [isplaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('loadedmetadata', () => {
        setDuration(audio.duration);
      });
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      if (isplaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [isplaying]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = e.target.value;
      setCurrentTime(Math.floor(e.target.value));
    }
  };

  const handlePlayPause = () => {
    if (isplaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  const handlePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <div className="player-card">
      <img src={img} alt="" />
      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={handleSeek}
      />
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
        onLoadedMetadata={() => setDuration(audioRef.current.duration)}
      ></audio>
      <div className="track-duration">
        <p>{formatTime(currentTime)}</p>
        <p>{formatTime(duration)}</p>
      </div>
      <button onClick={handlePlayPause}>
        <span className="material-symbols-rounded">
          {isplaying ? <img className="p" src={pauseIcon} alt="Pause" /> : <img className="p" src={playIcon} alt="Play" />}
        </span>
      </button>
    </div>
  );
};

export default AudioPlayer;
