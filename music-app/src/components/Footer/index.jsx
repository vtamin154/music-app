import React, { useEffect, useState, useRef } from 'react';
import {
  closeIcon,
  homeIcon,
  pauseIcon,
  playIcon,
  userIcon,
} from '../../assets';
import { baseUrl } from '../../config';
import AudioPlayer from '../AudioPlayer';
import './style.scss';
const Footer = ({ trackSelected, data }) => {
  const [slideUp, setSlideUp] = useState(false);
  const [currentTrackSelect, setCurrentTractSelected] = useState(trackSelected);
  const [trackProgress, setTrackProgress] = useState('');

  const [isPlaying, setIsPlaying] = useState(false);

  const {
    title = '',
    artist = '',
    avatar = '',
    audioFile = '',
  } = currentTrackSelect !== -1 ? data[currentTrackSelect] : {};

  // console.log(currentTrackSelect);

  const intervalRef = useRef();
  const startTime = () => {
    intervalRef.current = setInterval(() => {
      clearInterval(intervalRef.current);

      setTrackProgress(trackRef.current.currentTime);
    }, 1000);
  };

  const onChangeTrackProgress = (e) => {
    let value = e.target.value;
    setTrackProgress(value);
    trackRef.current.currentTime = value;
  };
  // console.log(audioFile);
  const trackSrc = `${baseUrl}/${audioFile}`;
  const trackRef = useRef(new Audio(trackSrc));

  const nextSong = () => {
    if(currentTrackSelect < data.length - 1) setCurrentTractSelected(pre => pre + 1);
    else setCurrentTractSelected(0);
  }
  const prevSong = () => {
    if(currentTrackSelect > -1) setCurrentTractSelected(pre => pre + 1);
    else setCurrentTractSelected(data.length -1)
  }

  useEffect(() => {
    if (isPlaying) {
      trackRef.current.play();
      startTime();
    } else trackRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    setCurrentTractSelected(trackSelected)
  },[trackSelected])
  useEffect(() => {
    //if song is already playing so stop it
    trackRef.current.pause();
    //play new song
    trackRef.current = new Audio(trackSrc);
    trackRef.current.play();
    setIsPlaying(true);

    startTime();
    // setCurrentTractSelected(trackSelected);
  }, [currentTrackSelect]);

  return (
    <div className={`footer ${slideUp ? 'active' : 'h-125'}`}>
      <div onClick={() => setSlideUp(!slideUp)} className="slide-up-btn"></div>

      <div className="d-visibility"></div>

      {slideUp && (
        <AudioPlayer
          title={title}
          artist={artist}
          avatar={avatar}
          duration={trackRef.current.duration}
          trackProgress={trackProgress}
          onChangeTrackProgress={onChangeTrackProgress}
          onPlayPause={() => setIsPlaying(!isPlaying)}
          isPlaying={isPlaying}
          nextSong = {nextSong}
          prevSong = {prevSong}
        />
      )}

      {!slideUp && (
        <>
          {trackSelected !== -1 && (
            <div className={`mini-player flex justify-sb`}>
              <div className="player-content flex">
                <div className="song-img mlr-10">
                  <img src={`${baseUrl}/${avatar}`} alt="" />
                </div>
                <div className="song-infor">
                  <p>{title}</p>
                  <p>{artist}</p>
                </div>
              </div>

              <div className="player-control">
                <button onClick={() => setIsPlaying(!isPlaying)}>
                  {isPlaying ? (
                    <img src={pauseIcon} alt="" />
                  ) : (
                    <img src={playIcon} alt="" />
                  )}
                </button>
                <button>
                  <img src={closeIcon} alt="" />
                </button>
              </div>
            </div>
          )}

          <div className="navigation-menu flex justify-evenly">
            <a href="/">
              <img src={homeIcon} alt="" />
              <span className="d-block">Home</span>
            </a>

            <a href="/">
              <img src={userIcon} alt="" />
              <span className="d-block">Profile</span>
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Footer;
