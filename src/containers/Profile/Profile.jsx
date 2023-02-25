import React, { useState } from 'react';
import { Container, Row, Col, Form, Card, CardBody } from "reactstrap";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


import ProfileHeader from './Header/ProfileHeader';
import SearchBar from './SearchBar/SearchBar.jsx';
import Schedule from './Schedule/Schedule.jsx'
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
        <Container >
            <SearchBar onSearch={handleSearch}/>
            <ul>
                {/* using .map since we're making each element a list item */}
                {filteredData.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </Container>
        <Container>
            <Link to='/donate' >
                <Button>Donate</Button>
            </Link>
        </Container>

        <Container>
            <Schedule />
        </Container>
        
        </>
    )
}

export default Profile;