import React from 'react';

function SearchBar(props) {
    function onClick(e) {
        props.handleClick(props.input);
    }
    return (
        <form className="search-bar" onSubmit={e => { e.preventDefault(); }}>
            <input type="text" value={props.input} onChange={props.handleChange} placeholder="Search for a song or artist"/>
            <input type="button" value="Search" onClick={onClick} />
        </form>
    );
}

export default SearchBar;