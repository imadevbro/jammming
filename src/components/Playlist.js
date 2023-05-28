import React from 'react';
import SongResult from './SongResult';

function Playlist() {
    return (
        <div className="song-list">
            <h2>My Playlist</h2>
            <SongResult />
            <SongResult />
            <SongResult />
        </div>
    );
}

export default Playlist;