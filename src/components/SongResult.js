import React from 'react';

function SongResult(props) {
    function handleClick() {
        props.onClick(props);
    }
    let action;
    if(props.type === 'search') {
        action = <p className="plus-btn">Add</p>
    } else {
        action = <p className="plus-btn">Remove</p>
    }
    
    return (
        <a className="song-result" onClick={handleClick}>
            <img src={props.src} alt="album art" className="album-art"/>
            <div>
                <p>{props.artist}</p>
                <p>{props.song}</p>
            </div>
            {action}
        </a>
    );
}

export default SongResult;