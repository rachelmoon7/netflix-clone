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
    const [newEventAdded, setNewEventAdded] = useState(false);
    const [eventDeleted, setEventDeleted] = useState(false);

    const handleSearch = (query) => {
        console.log("all events:", events)
        // const eventNames = events.map(item => item.name );
        const eventNames = filteredEvents.map(item => {
            if (item.name != null) {
              return item.name;
            } else {
              return 'none'; // or some other element to render
            }
          })
        const filtered = eventNames.filter(item => item.includes(query));
        setFilteredData(filtered);
    }
    console.log("newEventAdded before:", newEventAdded)

    useEffect(() => {
        fetch('http://localhost:8080/getAllEvents')
        .then(response => response.json())
        .then(data => setEvents(data.response))
        .catch(error => console.error(error))
        .then(setEvents(() => events.filter(Boolean)))
        .then(console.log("evnets? what ::", events))
    }, [newEventAdded, eventDeleted]);

    const filteredEvents = events.filter(item => item.name !== null);

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
                <AddEvent setEvents={setEvents}
                            events={events}
                            setNewEventAdded={setNewEventAdded}
                            setShowAddEvent={setShowAddEvent}/>
            ):(
                null
            )}
        </Container>
        <Container>
            <Button onClick={()=> setShowAddEvent(true)}>Add Event</Button>
            <EventList events={filteredEvents}
                        setEventDeleted={setEventDeleted}/>
        </Container>
        
        </>
    )
}

export default Profile;