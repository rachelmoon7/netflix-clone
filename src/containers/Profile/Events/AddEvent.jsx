import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { Button } from 'react-bootstrap';

import {
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';

const AddEvent = (props) => {
    const [eventName, setEventName] = useState('');
    const [maxCapacity, setMaxCapacity] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventTime, setEventTime] = useState('');
    const [eventCity, setEventCity] = useState('');
    const [addNewEvent, setAddNewEvent] = useState(false);
    // const location = useLocation();
    // console.log("??", location)
    // const setEvents = location.state.setEvents;
    // console.log("add events props:", props)
    // const handlSubmit = () => {
    //     // console.log("want to add:", {eventName})
    //     // props.setEvents([{"name": eventName, "max_capacity": maxCapacity, "date": eventDate, "time": eventTime, "city": eventCity}, ...props.events])
    //     setAddNewEvent(true);
    // }
    
    useEffect(() => {
        console.log("in addevent: eventName", eventName)
        const postData = {"name": eventName, "max_capacity": maxCapacity, "date": eventDate, "time": eventTime, "city": eventCity};
        if (eventName != '') {
        fetch('http://localhost:8080/addEvent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(postData)
        })
          .then(response => response.json())
          .then(data => console.log(data))
          .then(()=> props.setNewEventAdded(true))
          .then(props.setShowAddEvent(false))
          .catch(error => console.error(error));
      }
        } , [addNewEvent]); 

    return (
       <Form>
           <div>
                <input
                        type="text"
                        value={eventName}
                        placeholder="Enter Event Name"
                        onChange={( (e) => setEventName(e.target.value))} 
                />
            </div>
            <div>
                <input
                        type="text"
                        value={maxCapacity}
                        placeholder="Enter Event Max Capacity"
                        onChange={( (e) => setMaxCapacity(e.target.value))} 
                />
            </div>
            <div>
                <input
                        type="text"
                        value={eventDate}
                        placeholder="Enter Event Date"
                        onChange={( (e) => setEventDate(e.target.value))} 
                />
            </div>
            <div>
                <input
                        type="text"
                        value={eventTime}
                        placeholder="Enter Event Time"
                        onChange={( (e) => setEventTime(e.target.value))} 
                />
            </div>
            <div>
                <input
                        type="text"
                        value={eventCity}
                        placeholder="Enter Event City"
                        onChange={( (e) => setEventCity(e.target.value))} 
                />
            </div>
            <div>
                <Button onClick={() => {setAddNewEvent(true)}} > ADD</Button>
            </div>
       </Form> 
    )
}

export default AddEvent;