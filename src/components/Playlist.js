import React from 'react';
import SongResult from './SongResult';

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
            {playlistObjects}
        </div>
    );
}

export default Playlist;