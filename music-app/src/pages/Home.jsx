import React, { useEffect, useState } from 'react';
import AudioList from '../components/AudioList';
import Footer from '../components/Footer';
import Header from '../components/Header';
// import SearchInput from '../components/SearchInput';
import Tabs from '../components/Tabs';
import { baseUrl } from '../config';
import axios from 'axios';

const Home = () => {
  const [list, setList] = useState(false);
  //   const [search, setSearch] = useState('');
  const [listSong, setListSong] = useState([]);
  const [selectType, setSelectType] = useState('');
  const [songs, setSongs] = useState([]);

  const [track, setTrack] = useState(-1);
  const selectTypeSong = (type) => {
    setSelectType(type);
    setSongs(listSong['freelicense'][type]);
    setList(true);
  };
  // console.log(selectType);
  useEffect(() => {
    var config = {
      method: 'get',
      url: `${baseUrl}/song`,
      headers: {},
    };
    axios(config)
      .then((response) => {
        console.log(response.data.appData);
        setListSong(response.data.appData);
      })
      .catch((error) => console.log(error.message));
  }, []);

  const onBackButtonPress = () => {
    setList(false);
  };

  // console.log('song', songs);

  const setTrackSelected = (index) => {
    setTrack(index);
  };
  return (
    <div className="home">
      <Header />
      <h2 className="app-quote">Find the best music for you</h2>
      {/* <SearchInput /> */}
      <Tabs data={listSong['homeScreen']} selectTypeSong={selectTypeSong} />
      {list && (
        <AudioList
          onBackButtonPress={onBackButtonPress}
          data={songs}
          setTrackSelected={setTrackSelected}
        />
      )}
      <Footer trackSelected={track} data = {songs} />
    </div>
  );
};

export default Home;
