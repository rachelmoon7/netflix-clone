import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card, CardBody } from "reactstrap";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


import ProfileHeader from './Header/ProfileHeader';
import SearchBar from './SearchBar/SearchBar.jsx';
import Schedule from './Schedule/Schedule.jsx';
import EventList from './Events/EventList.jsx';
import Event from './Events/Event.jsx';

import AddEvent from './Events/AddEvent.jsx';

const Profile = () => {
    const [fruits, setFruits] = useState(['apple', 'banana', 'orange']);
    const [filteredData, setFilteredData] = useState([]);
    const [showAddEvent, setShowAddEvent] = useState(false);
    const [events, setEvents] = useState([]);

    const handleSearch = (query) => {
        // using .filter to see if it includes query to see if it should be in the new array or not
        const filtered = fruits.filter(item => item.includes(query));
        setFilteredData(filtered);
    }

    useEffect(() => {
        fetch('http://localhost:8080/getAllEvents')
        .then(response => response.json())
        .then(data => setEvents(data.response))
        .catch(error => console.error(error))
    }, []);

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
        <Container>
            {showAddEvent ? (
                <AddEvent />
            ):(
                null
            )}
        </Container>
        <Container>
            <Button onClick={()=> setShowAddEvent(true)}>Add Event</Button>
            <EventList events={events}/>
        </Container>
        
        </>
    )
}

export default Profile;