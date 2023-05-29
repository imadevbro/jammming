import React from 'react';
import SongResult from './SongResult';
import SaveToSpotify from './SaveToSpotify';

function Playlist(props) {
    const playlistObjects = props.data.map((item, i) => 
        <SongResult 
            key={i}
            id={i}
            src={item.src} 
            artist={item.artist} 
            song={item.song}
            onClick={props.onClick}
        />);
    return (
        <div className="song-list">
            <h2>My Playlist</h2>
            <input type="text" placeholder="Playlist name"/>
            {playlistObjects}
            <SaveToSpotify />
        </div>
    );
}

export default Playlist;