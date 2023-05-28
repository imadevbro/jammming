import React from 'react';

function SongResult(props) {
    console.log(props);
    return (
        <a className="song-result">
            <img src={props.mySong.src} alt="album art" className="album-art"/>
            <div>
                <p>{props.mySong.artist}</p>
                <p>{props.mySong.song}</p>
            </div>
            <p className="plus-btn">+</p>
        </a>
    );
}

export default SongResult;