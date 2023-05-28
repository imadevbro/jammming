import React from 'react';
import SongResult from './SongResult';

function SearchResults() {
    return (
        <div className="song-list">
            <SongResult />
            <SongResult />
            <SongResult />
        </div>
    );
}

export default SearchResults;