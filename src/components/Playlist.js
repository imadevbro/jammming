import React from 'react';
import SongResult from './SongResult';
import SaveToSpotify from './SaveToSpotify';

function Playlist(props) {
    let body=""
    let songUris = [];
    if(props.data.length > 0) {
        const playlistObjects = props.data.map((item, i) => 
        <SongResult 
            key={i}
            id={i}
            src={item.src} 
            artist={item.artist} 
            song={item.song}
            onClick={props.onClickSong}
            type={"playlist"}
        />);
        body = playlistObjects;
        console.log(props.data);
        //Should probably move this calculation up to the app level since we're going to do an additional join, and then pass in that one string
        songUris = props.data.map(item => item.uri);
        console.log(songUris);
    } else {
        body = <p>Select songs from the left to add them to your playlist</p>
    }
    
    return (
        <div className="song-list">
            <h2>My Playlist</h2>
            <input type="text" placeholder="Playlist name" onChange={props.onChangeName} value={props.input}/>
            <SaveToSpotify onSavePlaylist={props.onSavePlaylist} playlistName={props.input}/>
            {body}
        </div>
    );
}

export default Playlist;