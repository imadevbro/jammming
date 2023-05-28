import React from 'react';
import SongResult from './SongResult';

function SearchResults(props) {
    const songObjects = props.data.map(item => <SongResult mySong={item}/>);
    return (
        <div className="song-list">
            <h2>Search Results</h2>
            {songObjects}
        </div>
    );
}

export default SearchResults;