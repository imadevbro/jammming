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

  const searchData = [
    {src: "https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg", artist: "Kanye West", song: "The Good Life" },
    {src: "https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg", artist: "Bob Saget", song: "Dropout" },
    {src: "https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg", artist: "Tim Dragnuts", song: "Through the Wire" },
    {src: "https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg", artist: "Yo Dawg", song: "Diggity" }
  ];

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

  function handleClickSearch(searchValue) {
    console.log(searchValue);
    fetchSearch(searchValue);
  }

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <SearchBar handleChange={handleChangeSearch} handleClick={handleClickSearch} input={searchInput}/>
        <div className="main-container">
          <SearchResults data={searchData} onClick={handleClickSong}/>
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
