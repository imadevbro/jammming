import './App.css';
import React from 'react';
import { useState } from 'react';
import SearchResults from './components/SearchResults';
import NavBar from './components/NavBar';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';

function App() {

  const searchData = [
    {src: "https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg", artist: "Kanye West", song: "The Good Life" },
    {src: "https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg", artist: "Bob Saget", song: "Dropout" },
    {src: "https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg", artist: "Tim Dragnuts", song: "Through the Wire" },
    {src: "https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg", artist: "Yo Dawg", song: "Diggity" }
  ];

  const [playlistData, setPlaylistData] = useState([]);

  function handleClickSong(song) {
    setPlaylistData([...playlistData, {src: song.src, artist: song.artist, song: song.song }]);
  }

  function handleRemoveSong(song) {
    let newPlaylist = playlistData;
    newPlaylist.splice(song.id, 1);
    console.log(newPlaylist);
    setPlaylistData([...newPlaylist]);
  }

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <SearchBar />
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
