import React, { useState } from 'react';

import ProfileHeader from './Header/ProfileHeader';
import SearchBar from './SearchBar/SearchBar.jsx';

const Profile = () => {
    const [data, setData] = useState(['apple', 'banana', 'orange']);
    const [filteredData, setFilteredData] = useState([]);
    
    const handleSearch = (query) => {
        // using .filter to see if it includes query to see if it should be in the new array or not
        const filtered = data.filter(item => item.includes(query));
        setFilteredData(filtered);
    }

    return (
        <>
        <ProfileHeader />
        <SearchBar onSearch={handleSearch}/>
        <ul>
            {/* using .map since we're making each element a list item */}
            {filteredData.map(item => (
                <li key={item}>{item}</li>
            ))}
        </ul>
        </>
    )
}

export default Profile;