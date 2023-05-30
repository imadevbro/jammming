import React from 'react';

function SaveToSpotify(props) {
    function handleClick() {
        props.onSavePlaylist(props.playlistName);
    }
    return(
        <button className="save-btn" onClick={handleClick}>Save to Spotify</button>
    );
}

export default SaveToSpotify;