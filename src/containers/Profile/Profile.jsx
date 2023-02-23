import React, { useState } from 'react';

import ProfileHeader from './Header/ProfileHeader';
import SearchBar from './SearchBar/SearchBar.jsx';

const Profile = () => {
    const [data, setData] = useState(['apple', 'banana', 'orange']);
    const [filteredData, setFilteredData] = useState([]);
    
    const handleSearch = (query) => {
        const filtered = data.filter(item => item.includes(query));
        setFilteredData(filtered);
    }

    return (
        <>
        <ProfileHeader />
        <SearchBar onSearch={handleSearch}/>
        <ul>
            {filteredData.map(item => (
                <li key={item}>{item}</li>
            ))}
        </ul>
        </>
    )
}

export default Profile;