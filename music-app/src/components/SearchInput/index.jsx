import React, { useState } from 'react';
import { searchIcon } from '../../assets';
import './style.scss';

// import SpotifyWebApi from 'spotify-web-api-node';

// const spotifyApi = new SpotifyWebApi({
//   clientId: 'cb1496af7ec942b0ac46df7c2b4304c9',
// });
const SearchInput = () => {
  const [search, setSearch] = useState('');

  const handleSearch = e => {
    let value = e.target.value;
    setSearch(value);
  }
  // const [searchResult, setSearchResult] = useState([]);

  // const handleSearch = (e) => {
  //   let value = e.target.value;
  //   setSearch(value);
  //   if (!search) return setSearchResult([]);
  //   if (!accessToken) return;

  //   let cancel = false;
  //   spotifyApi.searchTracks(search).then((res) => {
  //     if(cancel) return;
  //     setSearchResult(
  //       res.body.tracks.items.map((track) => {
  //         const smallestAlbumImage = track.album.images.reduce(
  //           (smallest, image) =>
  //             image.height < smallest.height ? image : smallest,
  //           track.album.images[0]
  //         );
  //         return {
  //           artist: track.artists[0].name,
  //           title: track.name,
  //           uri: track.uri,
  //           albumUrl: smallestAlbumImage.url,
  //         };
  //       })
  //     );
  //   });
  //   return () => cancel = true;
  // };
  return (
    <div className="search-input-container flex">
      <img src={searchIcon} alt="" />
      <input
        placeholder="Search your song"
        // onChange={(e) => handleSearch(e)}
        value={search}
        onChange = {(e) => handleSearch(e)}
      />
    </div>
  );
};

export default SearchInput;
