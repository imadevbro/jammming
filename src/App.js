import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import SearchResults from './components/SearchResults';
import NavBar from './components/NavBar';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import {runFlow} from './api/Authenticate';
import {fetchSearch} from './api/fetchSearch'

runFlow();

function App() {

  const [songOptions, setSongOptions] = useState([]);
  const [playlistData, setPlaylistData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  function handleClickSong(song) {
    setPlaylistData([...playlistData, {src: song.src, artist: song.artist, song: song.song }]);
  }

  function handleRemoveSong(song) {
    let newPlaylist = playlistData;
    newPlaylist.splice(song.id, 1);
    console.log(newPlaylist);
    setPlaylistData([...newPlaylist]);
  }

  function handleChangeSearch(event) {
    setSearchInput(event.target.value);
  }

  useEffect(() => {
    console.log('Search: ', searchInput);
  }, [searchInput]);

  async function handleClickSearch(searchValue) {
    const searchResponse = await fetchSearch(searchValue);
    const formattedResponse = searchResponse.tracks.items.map(item =>  {
      return {src: item.album.images[0].url, artist: item.artists[0].name, song: item.name}
    });
    setSongOptions(formattedResponse);
  }

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <SearchBar handleChange={handleChangeSearch} handleClick={handleClickSearch} input={searchInput}/>
        <div className="main-container">
          <SearchResults data={songOptions} onClick={handleClickSong}/>
          <Playlist data={playlistData} onClick={handleRemoveSong}/>
        </div>
      </main>
      <footer>
        <p>Copyright Jammming</p>
      </footer>
    </div>
  );
}

export default App;
