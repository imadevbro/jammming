import React from 'react';

function SongResult(props) {
    function handleClick() {
        props.onClick(props);
    }
    return (
        <a className="song-result" onClick={handleClick}>
            <img src={props.src} alt="album art" className="album-art"/>
            <div>
                <p>{props.artist}</p>
                <p>{props.song}</p>
            </div>
            <p className="plus-btn">+</p>
        </a>
    );
}

export default SongResult;