import React from 'react';
import SongResult from './SongResult';

function SearchResults(props) {
    let body = "";
    if(props.data.length > 0) {
        const songObjects = props.data.map((item, i) => 
        <SongResult
            key={i}
            id={i}
            src={item.src} 
            artist={item.artist}
            song={item.song}
            uri={item.uri} 
            onClick={props.onClick}
            type={"search"}
        />);
        body = songObjects;
    } else {
        body = <p>Search for a song or artist to select songs for your playlist</p>
    }
    
    return (
        <div className="song-list">
            <h2>Search Results</h2>
            {body}
        </div>
    );
}

export default SearchResults;