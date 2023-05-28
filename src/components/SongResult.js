import React from 'react';
import albumArt from '../assets/album-art.jpg';

function SongResult() {
    return (
        <div className="song-result">
            <img src={albumArt} alt="album art" className="album-art"/>
            <div>
                <p>Artist name</p>
                <p>Song name</p>
            </div>
        </div>
    )
}

export default SongResult;