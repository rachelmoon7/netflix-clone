import React, { useState } from 'react';

const SearchBar = (props) => {
    const [searchQuery, setSearchQuery] = useState('');

    function handleSearch(event) {
        event.preventDefault();
        props.onSearch(searchQuery);
      }
    
    function handleInputChange(event) {
        setSearchQuery(event.target.value);
      }

    return (
        <form onSubmit={handleSearch}>
            <input type="text" value={searchQuery} onChange={handleInputChange} placeholder="Type in search..." />
            <button type="submit">Search</button>
        </form>    
    )
}

export default SearchBar;