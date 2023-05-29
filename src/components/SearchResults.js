import React from 'react';
import SongResult from './SongResult';

function SearchResults(props) {
    const songObjects = props.data.map((item, i) => 
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
            <h2>Search Results</h2>
            {songObjects}
        </div>
    );
}

export default SearchResults;