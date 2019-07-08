import React from 'react';
import AudioPlayer from 'react-h5-audio-player';

const Player = () => (
    <AudioPlayer
      autoPlay
      src="../sounds/Rodeo_Show.mp3"
      onPlay={e => console.log("onPlay")}
    />
  );

export default Player;