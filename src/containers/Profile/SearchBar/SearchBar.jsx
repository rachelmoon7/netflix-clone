import React, { useState } from 'react';

const SearchBar = (props) => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <form onSubmit={props.handleSearch}>
            <input type="text" value={searchQuery} onChange={props.handleInputchange} placeholder="Type in search..." />
            <button type="submit">Search</button>
        </form>    
    )
}

export default SearchBar;