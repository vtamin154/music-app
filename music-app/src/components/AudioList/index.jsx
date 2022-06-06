import React from 'react';
import { backIcon } from '../../assets';
import { baseUrl } from '../../config';
import './style.scss';
const AudioList = ({ onBackButtonPress, data, setTrackSelected }) => {
  const handleSetTrack = (index) => {
    setTrackSelected(index);
  };
  return (
    <div className="audio-list-container m-20">
      <div onClick={onBackButtonPress} className="audio-list-header">
        <img src={backIcon} alt="" />
      </div>

      <ul>
        <li className="audio-list-cover mtb-20">
          {data &&
            data.map((item, index) => (
              <div
                className="audio-list-item flex align-center ptb-10"
                key={index}
                onClick={() => handleSetTrack(index)}
              >
                <div className="audio-img">
                  <img src={`${baseUrl}/${item.avatar}`} alt="" />
                </div>
                <div className="audio-infor mlr-10">
                  <p>{item.title}</p>
                  <p>{item.artist}</p>
                </div>
              </div>
            ))}
        </li>
      </ul>
    </div>
  );
};

export default AudioList;
