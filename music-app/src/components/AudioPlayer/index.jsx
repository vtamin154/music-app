import React from 'react';
import { baseUrl } from '../../config';
import { next, playBlack, prev, pauseBlack } from '../../assets';

const AudioPlayer = ({
  title,
  artist,
  avatar,
  duration,
  trackProgress,
  onChangeTrackProgress,
  onPlayPause,
  isPlaying,
  nextSong,
  prevSong
}) => {

const currentProgress = (trackProgress/duration) * 100;

const trackProgressStyling = `linear-gradient(to right, #ffffff ${currentProgress}%, gray ${currentProgress}%)`
  return (
    <div>
      <div className="audio-player">
        <div className="audio-img">
          <img src={`${baseUrl}/${avatar}`} alt="" />
        </div>

        <div className="song-information mlr-20">
          <h2>{title}</h2>
          <h3>{artist}</h3>
        </div>

        <div className="audio-player-progress">
          <input
            type="range"
            min={'0'}
            max={duration}
            value={trackProgress}
            onChange={onChangeTrackProgress}
            style = {{background: trackProgressStyling}}
          />
        </div>

        <div className="audio-control">
          <button className='prev-btn' onClick={prevSong}>
            <img src={prev} alt="" />
          </button>
          <div className="btn-control">
            <button onClick={onPlayPause}>
              {!isPlaying ? <img src={playBlack} alt="" /> : <img alt='' src={pauseBlack}/>}
              
            </button>
          </div>
          <button className='next-btn' onClick={nextSong}>
            <img src={next} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
